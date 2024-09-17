import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='The Taste That Melts In You Mouth'/>
      <h1 className='app__header-h1'>The Palate Cleanser</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Cleanse your palate with some of the best tasty food you will ever have. We will make sure you leave our restaurant after having the meal you will never forget and an amazing experience.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;