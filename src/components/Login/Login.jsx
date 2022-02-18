import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux";

import "./Login.css";

const Login = () => {
  const inputNameRef = useRef();

  const dispatch = useDispatch(); // OWN TIP: Modern way to get dispatch function using hooks

  useEffect(() => {
    inputNameRef.current.focus();
    dispatch(loginUser()); // Login user if user data is stored in localStorage
    // eslint-disable-next-line
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputNameRef.current.value) {
      inputNameRef.current.style.borderColor = "rgb(175, 0, 0)";
      inputNameRef.current.focus();
      return;
    }

    dispatch(loginUser(inputNameRef.current.value));
  }

  return (
    <div className="login">
      <form action="submit" onSubmit={(e) => handleSubmit(e)}>
        <h1>Zaloguj się</h1>
        <input
          type="text"
          placeholder="Jak masz na imię?"
          defaultValue={""}
          ref={inputNameRef}
          onChange={(e) => (inputNameRef.current.value = e.target.value)}
        />
        <button className="submit-btn" type="submit">
          Dalej »
        </button>
      </form>
    </div>
  );
};

export default Login;
