import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Rubel"></Person>
      <Person name="bappaRaz"></Person>
      <h4>New Component</h4>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
} 

function Person(props) {
  console.log(props);
  return (
    <div className="jhanker">
      <h1>{props.name}</h1>
      <p>Profession: Programmer</p>
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
