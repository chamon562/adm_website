import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { InfoData } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  // after passing in toggle and is open need to go to NavBar.js and inside MenuBar Tag onClick={toggle} function
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {/* telling hero what slides is because its undefined, pass in as props */}
      <Hero slides={SliderData} />
      <InfoSection {...InfoData}/>
    </>
  );
}

export default App;
