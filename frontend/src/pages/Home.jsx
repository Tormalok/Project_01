import React from 'react';
import RootBar from '../components/Globals/RootBar';
import NavBar from '../components/Globals/NavBar';
import Banner from '../components/Home_Sections/Banner';
import CategoriesBox from '../components/Home_Sections/CategoriesBox';
import IntroBox from '../components/Home_Sections/IntroBox';
import ProductBox1 from '../components/Home_Sections/ProductBox1';
import ProductBox2 from '../components/Home_Sections/ProductBox2';
import Footer from '../components/Globals/Footer';
import BottomBar from '../components/Globals/BottomBar';
import './styles/home.css';

const Home = () => {
  return (
    <div className='home-container-main'>
      <RootBar />
      <NavBar />
      <div className='home-container-inner'>
        <IntroBox />
        <CategoriesBox />
        {/* <Banner /> */}
        <ProductBox1 title='Featured Products' />
        <ProductBox2 title='New Arrivals' />
      </div>
      <Footer />
      <BottomBar />
    </div>
  );
};

export default Home;
