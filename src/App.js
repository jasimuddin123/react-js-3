import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks =['SochNagar', 'JakiSun', 'Arnald','Amir Khan'];
  const nayikas =['kucbanu', 'chuckhatun', 'safali tak'];


  return (
    <div className="App">
      <header className="App-header">

      <Person name="Rubel" nayika="Mousumi"></Person>
      <Person name="Bapparaz" nayika="Shabana"></Person>
      <Person name="Jasim Uddin" nayika="Saima"></Person>
      <Person name={nayoks[0]} nayika={nayikas[2]}></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border:'2px solid red',
    margin:'10px'
  }
  console.log(props);
  return(
  <div style={personStyle}>
    <h2>Nayak:{props.name} </h2>
  <p>Nayaka :{props.nayika}</p>
  

  </div>
  )
}
export default App;
