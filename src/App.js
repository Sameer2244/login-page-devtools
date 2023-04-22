import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="login-container">
      <div className="login-form">
        <p>devtools.tech</p>
        <h1>Welcome to Devtools Tech</h1>
        <p>Login</p>
        <div className="inputs-container">
          <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="forget-remember">
              <span>
                <input type="checkbox" />
                Remember me
              </span>
              <a>Forget password?</a>
            </div>
          </form>
        </div>
      </div>
      <div className="login-image">
        <img src="https://stackblitz.com/files/react-an9lzc/github/Sameer2244/login-page-devtools/main/src/Image.png" />
      </div>
    </div>
  );
}
