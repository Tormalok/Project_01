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

            <div className='alt'>
              Don't have an account? <span>Sign up</span>
            </div>

            <div className='account-option'></div>
            <div className='account-option'></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
