import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {/* telling hero what slides is because its undefined, pass in as props */}
      <Hero slides= {SliderData}/>
    </>
  );
}

export default App;
