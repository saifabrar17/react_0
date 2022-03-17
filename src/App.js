import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  )
}


function ExternalUsers() {
  const [users, setUsers] = useState([]); // use state er moddhe [] default value hisebe kaj korbe 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  //age ekta comma diye empty array declare kore dewa uchit, emt arr te dependancy nai
  //tarpor empty arrow function declare korlam
  return (
    <div>
      <h2>External Users</h2>
      <h4>{users.length}</h4>
      {
        users.map(user => <Users name={user.name} email={user.email}></Users> )
      }
    </div>
  )
}

function Users(props){
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(55);

  const increaseCount = () => setCount(count + 1); //single line function
  const decreaseCount = () => setCount(count - 1); //single line function

  // const increaseCount = () => {                 //multiline function
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return (
    <div className="count">
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

// const singers = [
//   {name:'Dr. Mahfuz', job:'Singer'},
//   {name:'Tailor Swift', job:'Actor'},
//   {name:'Dj Snake', job:'DJ'},
//   {name:'Pitbull', job:'Singer'}
// ]
// function App() {
//   const nayoks = ['Kopila', 'BappaRaz','Ananta', 'Shakib Khan']
//   return (
//     <div className="App">
//       {
//         nayoks.map(nayok => <li>Name: {nayok}</li> )
//       }
//       {
//         nayoks.map(nayok => <Person name={nayok}></Person>)
//       }
//       <h4>======</h4>
//       {
//         singers.map(singer => <Person name={singer.name}></Person>)
//       }



//       <h4>======</h4>
//       <Person name={nayoks[0]}></Person>
//       <Person name={nayoks[1]}></Person>
//       <h4>New Component</h4>
//       {/* <Friend></Friend>
//       <Friend></Friend> */}
//     </div>
//   );
// } 

// function Person(props) {
//   console.log(props);
//   return (
//     <div className="jhanker">
//       <h1>{props.name}</h1>
//       {/* <p>Profession: Programmer</p> */}
//     </div>
//   )
// }
// function Friend() {
//   return (
//     <div className="jalil">
//       <h2>Name: Ananta Jalil</h2>
//       <p>Profession: Actor</p>
//     </div>
//   )
// }
export default App;
