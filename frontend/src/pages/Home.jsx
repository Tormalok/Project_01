import React from 'react';
import RootBar from '../components/Globals/RootBar';
import NavBar from '../components/Globals/NavBar';
import Banner from '../components/Home_Sections/Banner';
import CategoriesBox from '../components/Home_Sections/CategoriesBox';
import IntroBox from '../components/Home_Sections/IntroBox';
import ProductBox_1 from '../components/Home_Sections/ProductBox_1';
import ProductBox_2 from '../components/Home_Sections/ProductBox_1';
import Footer from '../components/Globals/Footer';
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
        <ProductBox_1 title='Featured Products' />
        <ProductBox_2 title='New Arrivals' />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
