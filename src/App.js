import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const nayoks =['Hassan', 'Sagar', 'Kamal', 'Milon','KaluBillah'];
  const products = [
    {name:'Photoshoop', price:'$90.99'},
    {name:'Illustrator', price:'$40.20'},
    {name:'Adove', price:'$20.22'},
    {name:'Premire El', price:'30.22'}


]
  


  return (
    <div className="App">
      <header className="App-header">
    <p>I am react Person</p>
    <Counter></Counter>
    <Users></Users>
    <ul>
  { nayoks.map(nayok => <li>{nayok}</li>)}
    </ul>

   
    {
    products.map(product=><Product product={product}></Product>)
    }
    <Product product ={products[0]}></Product>
    <Product product={products[1]}></Product>
    <Product product={products[2]}></Product>
  
      </header>
    </div>
  );
}

function Counter (){

  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  
  return(
<div>
 
   <h2>Count:{count}</h2>
  <button onClick={() => setCount(count + 1)}>Increase</button>
  <button onMouseMove={() => setCount(count - 1)}>Decrease</button>

</div>

  )
}

function Users(){
  const [users, setUsers] = useState([]);
    useEffect(()=>{

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    },[])

  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
           users.map(users => <li>{users.email}</li>)
        }
  </ul>
    </div>
  )
}
function Product(props){

  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'300px',
    float:'left',
    marginTop:'20px'
  }
  const {name,price} = props.product;
  console.log(name,price);
  return(
   <div style={productStyle}>
  
  <h2>{name}</h2>
  <h1>{price}</h1>
    <button>Buy now</button>

   </div>

  )

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
