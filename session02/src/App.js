import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
const h1Style = {
  "fontSize": "30px",
  "color": "#cc0000",
  "textTransform": "uppercase"
};

  return (
    <div className="App">
      <h1 style={ h1Style }>My React Page</h1>
      <h2 className="bio">This is my first React page, hello!</h2>
      </div>
  );
}


export default App;
