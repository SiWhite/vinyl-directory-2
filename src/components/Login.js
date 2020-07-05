import React from "react";

const Login = (props) => (
  <nav className="login">
    <h2>Dashboard login</h2>
    <button className="facebook" onClick={() => props.authenticate("facebook")}>
      Login with Facebook
    </button>
  </nav>
);

export default Login;
