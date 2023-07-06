import React from 'react';
// components
import Main from './Pages/main';
import Creative from './Pages/creative';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/creative" element={<Creative />}/>
    </Routes>
  </BrowserRouter>
      <div className='h-[175px]'></div>
    </div>
  );
};

export default App;
