import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "./apollo";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <div className="App">
      {isLoggedIn ? <div>HOTME</div> : <div>LOGIN</div>}
    </div>
  );
}

export default App;
