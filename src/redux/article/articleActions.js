import axios from "axios";

import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  ARTICLE_NEXT,
  ARTICLE_PREV,
} from "./articleTypes";

export const fetchArticlesRequest = () => {
  return {
    type: FETCH_ARTICLES_REQUEST,
  };
};

export const fetchArticlesSuccess = (articles) => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: articles,
  };
};

export const fetchArticlesFailure = (error) => {
  return {
    type: FETCH_ARTICLES_FAILURE,
    payload: error,
  };
};

export const articleNext = () => {
  return {
    type: ARTICLE_NEXT,
  };
};

export const articlePrev = () => {
  return {
    type: ARTICLE_PREV,
  };
};

// OWN TIP: Thanks to thunk middleware we can create action creator that return not only action but function which receives access to dispatch
export const fetchArticles = () => {
  return (dispatch) => {
    dispatch(fetchArticlesRequest());
    setTimeout(() => {
      // Delay to present loading state
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          const articles = response.data;
          dispatch(fetchArticlesSuccess(articles));
        })
        .catch((err) => {
          const errorMsg = err.message;
          dispatch(fetchArticlesFailure(errorMsg));
        });
    }, 1000);
  };
};
