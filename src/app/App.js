import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../component/g/Home';

function App(props) {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route path=":invoiceId" element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} /> */}
      </Route>
    </Routes>
    </div>
  );
}

export default App;