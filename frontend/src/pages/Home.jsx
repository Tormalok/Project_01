import React from 'react';
import RootBar from '../components/Globals/RootBar';
import NavBar from '../components/Globals/NavBar';
import Banner from '../components/Home_Sections/Banner';
import CategoriesBox from '../components/Home_Sections/CategoriesBox';
import IntroBox from '../components/Home_Sections/IntroBox';
import ProductBox from '../components/Home_Sections/ProductBox';
import './styles/home.css';

const Home = () => {
  return (
    <div className='home-container-main'>
      <RootBar />
      <NavBar />
      <div className='container-inner'>
        <IntroBox />
        <CategoriesBox />
        <Banner />
        <ProductBox title='Featured Products' />
      </div>
    </div>
  );
};

export default Home;
