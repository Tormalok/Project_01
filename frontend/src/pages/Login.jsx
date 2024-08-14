import React from 'react';
import RootBar from '../components/Globals/RootBar';
import './styles/login.css';

const Login = () => {
  return (
    <div className='login-container-main'>
      <RootBar />
      <div className='login-container-inner'>
        <div className='form-box'>
          <div className='form-title'>
            <h1>Welcome back!</h1>
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
              Sign In
            </button>

            <div className='alt-one'>
              Don't have an account? <span>Sign up</span>
            </div>

            <div className='alt-two'>
              <p>or</p>
            </div>

            <a href='#' className='account-option-link'>
              <div className='account-option'>
                <div className='brand-logo-container'>
                  <img src='/google-icon.svg' className='logo' />
                </div>

                <div className='brand-logo-action'>Continue with Google</div>
              </div>
            </a>

            <a href='#' className='account-option-link'>
              <div className='account-option'>
                <div className='brand-logo-container'>
                  <img src='/microsoft-icon.svg' className='logo' />{' '}
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
