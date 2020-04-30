import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks =['SochNagar', 'JakiSun', 'Arnald','Amir Khan'];
  const nayikas =['kucbanu', 'chuckhatun', 'safali tak'];


  return (
    <div className="App">
      <header className="App-header">
    <p>I am react Person</p>

    <Person name=" Jasim Uddin" job="Player"></Person>
    <Person name="Shohag" job="viewers"></Person>
  
      </header>
    </div>
  );
}

function Person (props){

    return (
      <div style={{border:'2px solid gold', width:'400px'}}>
        <h2>My Name:{props.name}</h2>
    <p>My Profession:{props.job}</p>

      </div>

    )


}

export default App;
