import { LOGIN_USER, LOGOUT_USER } from "./userTypes";

const initialState = {
  username: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        username: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        username: null,
      };
    default:
      return state;
  }
};

export default userReducer;
