import React from 'react';
// components
import Main from './Pages/main';
import Creative from './Pages/creative';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import FloatingDots from './components/FloatingDots';

const App = () => {
  return (
    <div className='relative bg-no-repeat bg-cover overflow-hidden '>
   
    <BrowserRouter>
    <Header />
    <FloatingDots dotCount={25} dotSize={1} />
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/creative" element={<Creative />}/>
    </Routes>
  </BrowserRouter>
      
    </div>
  );
};

export default App;
