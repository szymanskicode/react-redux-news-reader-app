import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";

const App = () => {
  const user = useSelector((state) => state.user.username); // OWN TIP: New way to get redux store state using hooks

  return <div className="App">{!user ? <Login /> : <Logout />}</div>;
};

export default App;
