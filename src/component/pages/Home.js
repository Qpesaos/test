import React from 'react';




import '../../App.css'
import Cards from '../Cards';
import Cards2 from '../Cards2';
import HeroSection from '../HeroSection'

import Accordion from '../Acordion';
import Overlap from '../Overlap';
import Overlap2 from '../Overlap2';

import ImageSlider from '../ImageSlider';





function Home (){
    return(
        <>
        <HeroSection />
        <Overlap/>   
        <Cards2/>{/* slider */}  
        {/* <ImageSlider/> */}
        <Cards/>            
        <Overlap2/>{/* Roadmap */}
        
        <Accordion/>

        </>

    );
}

export default Home;