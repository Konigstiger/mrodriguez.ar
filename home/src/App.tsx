// import React from 'react';
//import './App.css';

// TODO: Add these components
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
