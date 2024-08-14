import React, { useState } from 'react';
import RootBar from '../components/Globals/RootBar';
import './styles/login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
  };

  return (
    <div className='login-container-main'>
      <RootBar />
      <div className='login-container-inner'>
        <div className='form-box'>
          <div className='form-title'>
            <h1>{isSignUp ? 'Create an account' : 'Welcome back'}</h1>
          </div>
          <form className='login-form'>
            <div className='form-group'>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Enter your password'
                required
              />
            </div>
            <button type='submit' className='login-button'>
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>

            <div className='alt-one'>
              {isSignUp
                ? 'Already have an account? '
                : "Don't have an account? "}
              <a href='#' onClick={toggleForm}>
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </a>
            </div>

            <div className='alt-two'>
              <p>or</p>
            </div>

            <a href='#' className='account-option-link'>
              <div className='account-option'>
                <div className='brand-logo-container'>
                  <img
                    src='/google-icon.svg'
                    className='logo'
                    alt='Google logo'
                  />
                </div>
                <div className='brand-logo-action'>Continue with Google</div>
              </div>
            </a>

            <a href='#' className='account-option-link'>
              <div className='account-option'>
                <div className='brand-logo-container'>
                  <img
                    src='/microsoft-icon.svg'
                    className='logo'
                    alt='Microsoft logo'
                  />
                </div>
                <div className='brand-logo-action'>Continue with Microsoft</div>
              </div>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
