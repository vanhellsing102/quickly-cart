import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Navbar/Hero/Hero';
import Category from './components/Category/Category';
import Benefit from './components/Benefit/Benefit';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Category></Category>
      <Benefit></Benefit>
    </div>
  );
};

export default App;