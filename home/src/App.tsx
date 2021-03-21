import React from 'react';

import './App.css';
import './Backgrounds.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


import portrait from "../images/mrodriguez-portrait-small.jpg";
import demoPic from "../images/mountain-200.jpg";
//import demoAuthor from "../images/plato-200.png";

const App: React.FC = () => {

  return (
    <div className="App">
        <Header />
        <Home />
        <Footer />
    </div>
  );
};

export default App;