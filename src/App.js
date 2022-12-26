import './App.css';
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Search from './components/Search';
import Works from './components/Works';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Search/>
      <Works/>
      <Benefits/>
      <Footer/>
    </div>
  );
}

export default App;
