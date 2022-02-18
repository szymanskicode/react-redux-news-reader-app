import { LOGIN_USER, LOGOUT_USER } from "./userTypes";

export const loginUser = (username) => {
  !username && (username = localStorage.getItem("username"));

  if (!username) {
    return {
      type: LOGOUT_USER,
    };
  } else {
    localStorage.setItem("username", username);
    return {
      type: LOGIN_USER,
      payload: username,
    };
  }
};

export const logoutUser = () => {
  localStorage.removeItem("username");
  return {
    type: LOGOUT_USER,
  };
};
