import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RootBar from '../components/Globals/RootBar';
import './styles/login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signUpStep, setSignUpStep] = useState(1);
  const navigate = useNavigate(); // Hook to handle navigation

  const toggleForm = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
    setSignUpStep(1); // Reset to first step when toggling forms
  };

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

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Send a POST request to the backend sign-up API
      const response = await axios.post('http://localhost:8000/api/users', {
        firstname: firstName,
        lastname: lastName,
        email,
        password,
      });

      // Handle success response
      console.log('Sign-up successful:', response.data);

      alert('User created');

      // Redirect to the homepage after successful sign-up
      navigate('/');
    } catch (error) {
      // Handle error response
      console.error(
        'Error signing up:',
        error.response?.data?.message || error.message
      );
      alert(
        'Sign-up failed: ' + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className='login-container-main'>
      <RootBar />
      <div className='login-container-inner'>
        <div className='form-box'>
          <div className='form-title'>
            <h1>{isSignUp ? 'Create account' : 'Welcome back!'}</h1>
          </div>
          <form
            className='login-form'
            onSubmit={isSignUp ? handleSignUpSubmit : handleSignInSubmit}
          >
            {isSignUp && signUpStep === 2 ? (
              <>
                <div className='form-group'>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='Enter your first name'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    placeholder='Enter your last name'
                    required
                  />
                </div>
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
                  Sign Up
                </button>
              </>
            ) : (
              <>
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
              </>
            )}

            <div className='alt-one'>
              {isSignUp
                ? 'Already have an account? '
                : "Don't have an account? "}
              <a href='#' onClick={toggleForm}>
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </a>
            </div>

            {!isSignUp || signUpStep === 1 ? (
              <div className='alt-two'>
                <p>or</p>
              </div>
            ) : null}

            {!isSignUp || signUpStep === 1 ? (
              <>
                <a href='#' className='account-option-link'>
                  <div className='account-option'>
                    <div className='brand-logo-container'>
                      <img
                        src='/google-icon.svg'
                        className='logo'
                        alt='Google logo'
                      />
                    </div>
                    <div className='brand-logo-action'>
                      Continue with Google
                    </div>
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
                    <div className='brand-logo-action'>
                      Continue with Microsoft
                    </div>
                  </div>
                </a>
              </>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
