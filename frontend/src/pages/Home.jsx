import React from 'react';
import RootBar from '../components/RootBar';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import CategoriesBox from '../components/CategoriesBox';
import './styles/home.css';

const Home = () => {
  return (
    <div className='home-container-main'>
      <RootBar />
      <NavBar />
      <div className='home-container-inner'>
        <div className='section-one'></div>
        <CategoriesBox />
        <Banner />
      </div>
    </div>
  );
};

export default Home;
