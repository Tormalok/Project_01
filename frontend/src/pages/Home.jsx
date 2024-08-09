import React from 'react';
import RootBar from '../components/RootBar';
import NavBar from '../components/NavBar';
import './styles/home.css';

const Home = () => {
  return (
    <div className='main-container'>
      <RootBar />
      <NavBar />
    </div>
  );
};

export default Home;
