import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home'

import Desert from '../component/desert/Desert'
import HNapitki from '../component/hNapitki/HNapitki'
import Shaurma from '../component/shaurma/Shaurma'
import Burger from '../component/burger/Burger';
import Footer from './footer';

function App(props) {
  return (
    <div className=' m-2 p-2'> 
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Burger' element={<Burger/>}/>
        <Route path="/Desert" element={<Desert />} />
        <Route path="/HNapitki" element={<HNapitki />} />
        <Route path="/Shaurma" element={<Shaurma/>} />
      </Routes>
<Footer/>
    </div>
  );
}

export default App;