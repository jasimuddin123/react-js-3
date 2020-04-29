import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">

      <Person></Person>
      <Person></Person>
      <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  const personStyle={
    border:'2px solid red',
    margin:'10px'
  }
  return(
  <div style={personStyle}>
    <h2>Name : Jasim Uddin </h2>
    <p>Job : SP Supervisor</p>

  </div>
  )
}
export default App;
