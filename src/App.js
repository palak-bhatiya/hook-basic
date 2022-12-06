import logo from './logo.svg';
import './App.css';
import { useState } from "react";
function App() {
  const[user,setUser]=useState("hello");
  const[name,setName]=useState('good morning')
  const btnhandler = () =>{
    setUser("creative")
    alert(name);
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <h1>{user}</h1>
      <h1>{user}</h1>
      <h1>{user}</h1>
      <h1>{user}</h1>
      <h1>{user}</h1>
      <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
      <input type="button" onClick={btnhandler} value="click here"></input>
    </div>
  );
}

export default App;
