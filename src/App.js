import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/assets/stylesheets/main.scss';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Main />
      </header>
    </div>
  );
}

export default App;
