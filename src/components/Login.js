import React, { useState } from "react";

const Login = ({ authenticate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authenticate(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <nav className="login col-sm-12">
        <h2>Dashboard login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </nav>
    </div>
  );
};

export default Login;
