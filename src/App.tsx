// App.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';


import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';

import './app.css';

const App: React.FC = () => {
  useTranslation(); 

  return (
    <div className="App">
      <Header /> 
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
