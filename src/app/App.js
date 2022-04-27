import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home'

import Desert from '../component/desert/Desert'
import HNapitki from '../component/hNapitki/HNapitki'
import Gnapitki from '../component/gnapitki/Gnapitki';
import Shaurma from '../component/shaurma/Shaurma'
import Burger from '../component/burger/Burger';
import Krylyshki from '../component/krylyshki/Krylyshki'
import Footer from './footer';
import Sous from '../component/sous/Sous';
import Samsa from '../component/samsa/Samsa';

function App(props) {
  return (
    <div className=' m-2 p-2'> 
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Burger' element={<Burger/>}/>
        <Route path="/Desert" element={<Desert />} />
        <Route path="/HNapitki" element={<HNapitki />} />
        <Route path="/Gnapitki" element={<Gnapitki />} />
        <Route path="/Shaurma" element={<Shaurma/>} />
        <Route path='/Samsa' element={<Samsa/>} />
        <Route path='/Sous' element={< Sous/>} />
        <Route path="/Krylyshki" element={<Krylyshki/>}/>
      </Routes>
<Footer/>
    </div>
  );
}

export default App;