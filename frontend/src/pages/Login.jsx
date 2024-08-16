import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RootBar from '../components/Globals/RootBar';
import './styles/login-signup.css';

const Login = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Send a POST request to the backend login API
      const response = await axios.post(
        'http://localhost:8000/api/users/login',
        {
          email,
          password,
        }
      );

      // Handle success response
      console.log('Login successful:', response.data);

      alert('User signed in');

      // Redirect to the homepage after successful login
      navigate('/');
    } catch (error) {
      // Handle error response
      console.error(
        'Error logging in:',
        error.response?.data?.message || error.message
      );
      alert(
        'Login failed: ' + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className='login-container-main'>
      <RootBar />
      <div className='login-container-inner'>
        <div className='form-box'>
          <div className='form-title'>
            <h1>Welcome back</h1>
          </div>
          <form className='login-form' onSubmit={handleSignInSubmit}>
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
              Don't have an account? <a href='/signup'>Sign Up</a>
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
