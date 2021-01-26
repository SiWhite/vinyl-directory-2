import React from "react";

const Login = (props) => (
  <div className="container">
    <nav className="login col-sm-12">
      <h2>Dashboard login</h2>
      <button className="facebook" onClick={() => props.authenticate("facebook")}>
        Login with Facebook
      </button>
    </nav>
  </div>
);

export default Login;
