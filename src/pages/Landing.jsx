import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar visible />
      <Hero showContent />
    </div>
  );
};

export default Landing;
