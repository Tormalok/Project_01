import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RootBar from '../components/Globals/RootBar';
import './styles/login-signup.css';

const Signup = () => {
  const [stage, setStage] = useState('initial'); // Stage management
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();

  // Handle the initial sign-up (email and password)
  const handleInitialSubmit = (e) => {
    e.preventDefault();
    // Save email and password in state
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);

    // Move to the next stage
    setStage('names');
  };

  // Handle the final stage (sending all data together)
  const handleFinalSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send all data to the backend
      const response = await axios.post('http://localhost:8000/api/users', {
        email,
        password,
        firstname: firstName,
        lastname: lastName,
      });

      console.log('Sign-up successful:', response.data);

      // Store the token in local storage
      localStorage.setItem('token', response.data.token);

      alert('Sign-up complete');
      navigate('/'); // Redirect after successful sign-up
    } catch (error) {
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
    <div className='signup-container-main'>
      <RootBar />
      <div className='signup-container-inner'>
        <div className='form-box'>
          <div className='form-title'>
            <h1>Create Account</h1>
          </div>
          {stage === 'initial' && (
            <form className='signup-form' onSubmit={handleInitialSubmit}>
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
              <button type='submit' className='signup-button'>
                Continue
              </button>
              <div className='alt-one'>
                Already have an account? <a href='/login'>Sign In</a>
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
                  <div className='brand-logo-action'>
                    Continue with Microsoft
                  </div>
                </div>
              </a>
            </form>
          )}
          {stage === 'names' && (
            <form className='signup-form' onSubmit={handleFinalSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  placeholder='Enter your first name'
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  placeholder='Enter your last name'
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <button type='submit' className='signup-button'>
                Sign Up
              </button>
              <div className='alt-one'>
                Already have an account? <a href='/login'>Sign In</a>
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
                  <div className='brand-logo-action'>
                    Continue with Microsoft
                  </div>
                </div>
              </a>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
