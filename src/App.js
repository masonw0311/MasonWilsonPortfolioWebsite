import './App.css';
import HeroSection from './components/HeroSection';
import Expertise from './components/Expertise';
import Projects from './components/Projects'
import React, { useEffect } from 'react';
import Experience from './components/Experience';
import Contact from './components/contact';



function App() {
  // useEffect(() => {
  //   // Create the custom cursor element
  //   const cursor = document.createElement('div');
  //   cursor.id = 'custom-cursor';
  //   document.body.appendChild(cursor);

  //   // Add styles dynamically or via a CSS file
  //   cursor.style.position = 'absolute';
  //   cursor.style.width = '40px';
  //   cursor.style.height = '40px';
  //   cursor.style.backgroundImage = 'url(/hand-pointer.svg)';
  //   cursor.style.backgroundSize = 'contain';
  //   cursor.style.pointerEvents = 'none';
  //   cursor.style.zIndex = '9999';
  //   cursor.style.transform = 'translate(-50%, -50%)';

  //   // Update the cursor position dynamically
  //   const handleMouseMove = (e) => {
  //     cursor.style.left = `${e.clientX}px`;
  //     cursor.style.top = `${e.clientY}px`;
  //   };

  //   document.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     // Clean up on unmount
  //     document.removeEventListener('mousemove', handleMouseMove);
  //     document.body.removeChild(cursor);
  //   };
  // }, []);

  return (
    <div className="App">
      <HeroSection />
      <Expertise />
      <Projects/>
      <Experience />
      <Contact/>
    </div>
  )
}

export default App;
