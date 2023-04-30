import React from 'react';
import './style.css';

export default function Login() {
  const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  const login = (e) => {
    e.preventDefault();
    if (emailregex.test(email)) {
      setError('Valid email address');
    } else {
      setError('Invalid email address');
    }

    if (passwordregex.test(password)) {
      setError((e) => e + ' invalid password');
    } else {
      setError((e) => e + ' valid password');
    }
  };

  const [error, setError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div className="login-container">
      <div className="login-form">
        <p>devtools.tech</p>
        <h1>Welcome to Devtools Tech</h1>
        <p>Login</p>
        <div className="inputs-container">
          <form>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="forget-remember">
              <span>
                <input type="checkbox" />
                Remember me
              </span>
              <a>Forget password?</a>
            </div>
            <button onClick={login}>Login</button>
          </form>

          <p>
            Don't have an account? <span>Get Started</span>
          </p>
          {error.length > 0 && <p>{error}</p>}
          <div className="footer">
            <p>Copyright © 2023 Devtools Tech. All rights reserved.</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className="login-image">
        <img src="https://stackblitz.com/files/react-an9lzc/github/Sameer2244/login-page-devtools/main/src/Image.png" />
      </div>
    </div>
  );
}
