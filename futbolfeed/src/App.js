import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';

const url = "ttps://www.scorebat.com/arsenal-s-vs-talleres-cordoba-live-stream/";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{width: "50px", height: "100px"}}><iframe src='https://www.scorebat.com/embed/g/859802/?s=2' frameborder='0' width='260' height='350' allowfullscreen allow='autoplay; fullscreen' style={{width: "100%", height: "100%", position: "absolute", left: "0px", top:"0px", overflow: "hidden"}}></iframe></div>
        <HomePage />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
