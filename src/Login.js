import React from 'react';
import './style.css';

export default function Login() {
  const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  const login = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      alert('please enter email');
    } else if (password.length === 0) {
      alert('please enter password');
    } else if (!emailregex.test(email) || !passwordregex.test(password)) {
      alert('Invalid email or password');
    } else {
      alert('login successful');
    }
  };

  const [error, setError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div className="login-container">
      <div className="login-form">
        <p className="website-name">devtools.tech</p>
        <h1>Welcome to Devtools Tech</h1>
        <p className="login-title">Login</p>
        <div className="inputs-container">
          <form>
            <div>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="forget-remember">
              <div>
                <input type="checkbox" />
                Remember me
              </div>
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
