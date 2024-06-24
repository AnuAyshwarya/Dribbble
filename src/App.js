import React from 'react';
import './App.css';

import Bar from './components/bar';
import Images from './components/Images';
import NavBarComponent from './components/NavBarComponent';
import Footer from './components/footer';



function App() {
  return (
    <div>
      <NavBarComponent/>
      <Bar/>
      <Images />
      <Footer/>
    </div>
  );
}

export default App;
