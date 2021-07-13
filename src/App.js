import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import OurStory from './components/OurStory';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <OurStory />
      <Menu />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
