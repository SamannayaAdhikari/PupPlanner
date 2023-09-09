import React, { useState } from 'react';
import '../App.css'; // Import your CSS here

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can implement your login logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>create an account</div>
    </div>
  );
}

export default Login;
