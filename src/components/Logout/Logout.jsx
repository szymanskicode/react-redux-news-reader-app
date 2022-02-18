import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux";

import "./Logout.css";
import Articles from "../Articles/Articles";

const Logout = (props) => {
  return (
    <div className="logout">
      <section>
        <h1>
          Witaj
          <span className="username">
            {props.username && ` ${props.username}`}
          </span>
          !
        </h1>
        <p className="logged-as">
          Usiądź wygodnie i przeczytaj świeżo pobrane artykuły.
        </p>

        <Articles />

        <button className="submit-btn" onClick={props.logoutUser}>
          Wyloguj się
        </button>
      </section>
    </div>
  );
};

// OWN TIP: connect function connects mapStateToProps and mapDispatchToProps with base component what allows to access state and dispatch functions by props in base component - this is older way to manage redux store state, before hooks showed up. ownProps gives access to props which were passed to base component initialy. Based on that whe can return e.g. different values of state or dispatch methods.
const mapStateToProps = (state, ownProps) => {
  return {
    username: state.user.username,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
