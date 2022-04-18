import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home'

import Bluydas from '../components/BLUYDA/Bluydas'
import Deserts from '../components/desert/Deserts'
import Hlep from '../components/HLEP/Hlep'
import Kofes from '../components/kofe/Kofes'
import Kokteils from '../components/kokteil/Kokteils'
import Limonats from '../components/limonat/Limonats'
import Napitkis from '../components/napitki/Napitkis'
import Pizzas from '../components/pizza/Pizzas'
import Ryss from '../components/rys/Ryss'
import Rollys from '../components/ROLLY/Rollys'
import Salats from '../components/salat/Salats'
import Savtraks from '../components/savtrak/Savtraks'
import Shaurmas from '../components/SHAURMA/Shaurmas'
import Burgers from '../components/burger/Burgers';
import Footer from './footer';

function App(props) {
  return (
    <div className=' m-2 p-2'> 
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bluydas" element={<Bluydas />} />
        <Route path='/Burgers' element={<Burgers/>}/>
        <Route path="/Deserts" element={<Deserts />} />
        <Route path="/Hlep" element={<Hlep />} />
        <Route path="/Kofes" element={<Kofes />} />
        <Route path="/Kokteils" element={<Kokteils />} />
        <Route path="/Limonats" element={<Limonats />} />
        <Route path="/Napitkis" element={<Napitkis />} />
        <Route path="/Pizzas" element={<Pizzas />} />
        <Route path="/Ryss" element={<Ryss />} />
        <Route path="/Rollys" element={<Rollys />} />
        <Route path="/Salats" element={<Salats />} />
        <Route path="/Savtraks" element={<Savtraks />} />
        <Route path="/Shaurmas" element={<Shaurmas />} />
      </Routes>
<Footer/>
    </div>
  );
}

export default App;