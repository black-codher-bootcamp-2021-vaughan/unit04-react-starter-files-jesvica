import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

function App() {
  if(Profile) {
  return (
      <Profile name="Jessica" bio="I love coding and design!" />
  );
} else {
  return "#content";
}};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
