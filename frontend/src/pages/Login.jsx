import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Simulate successful sign-in
    navigate('/'); // Redirect to homepage
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (signUpStep === 1) {
      setSignUpStep(2);
    } else {
      // Simulate successful sign-up and redirect to homepage
      navigate('/');
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
                <button type='submit' className='login-button'>
                  Continue
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
                <a
                  href='https://accounts.google.com/signin'
                  className='account-option-link'
                >
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

                <a
                  href='https://login.microsoftonline.com/'
                  className='account-option-link'
                >
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
