import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './component/pages/Home';
import RoadMap from './component/pages/RoadMap';
import FAQ from './component/pages/FAQ';
import Team from './component/pages/Team';
import Rarity from './component/pages/Rarity';
import Footer from './component/Footer';
import ImageSlider from './component/ImageSlider';
import Accordion from './component/Acordion';
import HeroSection from './component/HeroSection';
import ScrollToTop from './component/ScrollToTop';
import Cards from './component/Cards';
import Overlap2 from './component/Overlap2';

function App() {
  return (
    <>   
      <Router>
      <ScrollToTop />
      <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} /> 
            <Route path='/RoadMap' exact component={Overlap2} />
            <Route path='/FAQ' exact component={Accordion} />
            <Route path='/Cards' exact component={Cards} /> 
            <Route path='/Rarity' exact component={Rarity} /> 
            {/* <Route path='/ImageSlider' exact component={ImageSlider} />  */}
          
          </Switch> 
                 
          
          <Footer />
      </Router>
      
     
    </>
  );
}

export default App;
