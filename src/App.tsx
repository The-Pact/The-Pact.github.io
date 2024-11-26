import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <Hero />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;