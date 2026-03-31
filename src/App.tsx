import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Features from './components/Features';
import Differentials from './components/Differentials';
import HowToAccess from './components/HowToAccess';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <About />
      <Product />
      <Features />
      <Differentials />
      <HowToAccess />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
