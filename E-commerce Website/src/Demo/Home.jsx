import React from 'react';
import { NavLink } from 'react-router-dom';
 import web from "../image/bs.jpg";
import Common from './Common';
 
const Home = ()=>{
    return(
        <>
           <Common name="Grow your Career with" imgsrc={web} visit="/service" btname="Get Started"/>
        </>
    );
  };
  export default Home;