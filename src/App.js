import logo from './logo.svg';
import './App.css';

const singers = [
  {name:'Dr. Mahfuz', job:'Singer'},
  {name:'Tailor Swift', job:'Actor'},
  {name:'Dj Snake', job:'DJ'},
  {name:'Pitbull', job:'Singer'}
]
function App() {
  const nayoks = ['Kopila', 'BappaRaz','Ananta', 'Shakib Khan']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li> )
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      <h4>======</h4>
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }



      <h4>======</h4>
      <Person name={nayoks[0]}></Person>
      <Person name={nayoks[1]}></Person>
      <h4>New Component</h4>
      {/* <Friend></Friend>
      <Friend></Friend> */}
    </div>
  );
} 

function Person(props) {
  console.log(props);
  return (
    <div className="jhanker">
      <h1>{props.name}</h1>
      {/* <p>Profession: Programmer</p> */}
    </div>
  )
}
function Friend() {
  return (
    <div className="jalil">
      <h2>Name: Ananta Jalil</h2>
      <p>Profession: Actor</p>
    </div>
  )
}
export default App;
