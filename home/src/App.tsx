import React from 'react';
import './App.css';
import './Backgrounds.css';

// TODO: Add these components
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const App: React.FC = () => {

  return (
    <div className="App background-diagonal-lines">
        <Header />
        <Home />
        <Footer />
    </div>
  );
};

export default App;