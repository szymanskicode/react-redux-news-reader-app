import {
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  ARTICLE_NEXT,
  ARTICLE_PREV,
} from "./articleTypes";

const initialState = {
  loading: false,
  articles: [],
  error: "",
  current: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
        error: "",
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        articles: [],
        error: action.payload,
      };
    case ARTICLE_NEXT:
      return {
        ...state,
        current: state.current === state.articles.length ? 1 : ++state.current,
      };
    case ARTICLE_PREV:
      return {
        ...state,
        current: state.current === 1 ? state.articles.length : --state.current,
      };
    default:
      return state;
  }
};

export default reducer;
