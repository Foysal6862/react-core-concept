import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Salman', 'Alomgir'];
  const products = [
    {name:'Photoshop', price: '$90.99'},
    {name:'Ilastator', price: '$50.90'},
    {name: 'PDF', price: '$10'},
    {name: 'Premier El', price: '$100'},
  ];
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Person name={ nayoks[0]} nayika='Mousumi'></Person>
        <Person name='Josim' nayika='Shabana'></Person>
        <Person name='Bapparaz' nayika='Cheka'></Person>
        <Person name='Elias K' nayika='Bobita'></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users :{users.length} </h3>
      <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  // const handleIncrease = () =>setCount(count + 1);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick= {() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '10px',
    padding: '10px'
  };
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return (
  <div style = {{ border: '2px solid red', margin: '10px', width: '300px'}}>
  <h1>Name: {props.name}</h1>
  <h3>Hero of {props.name}</h3>
  </div> 
  )
}

export default App;
