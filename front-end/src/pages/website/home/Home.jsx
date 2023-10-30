import React, { useEffect, useState } from 'react'
import {  CATEGORIES} from '../../../api/Api'
import { Axios } from '../../../api/Axios';
import './Website.css'
import Navbar from './Navbar';
import HomeSlider from './HomeSlider';
import Footer from '../footer/Footer';
import HomeTool from './HomeTool';
import HomeFlex from './HomeFlex';
import HomeOffer from './HomeOffer';
import Client from './Client';
import {Helmet} from "react-helmet";
const Home = () => {

  
    return (
        <div className='HOME'>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
          <Navbar />
          <HomeSlider />
          <HomeTool />
          <HomeFlex />
          <HomeOffer />
          <Client />
          <Footer />
        </div>
      );
}
export default Home