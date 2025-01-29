import './App.css';
import { createContext, useState, useContext } from 'react';

function App() {
  const [greeting, setGreeting] = useState({greet: 'Hello!'})
  console.log(setGreeting);
  
  function updateGreeting(){
    const newGreeting = {...greeting}
    newGreeting.greet = 'Hello world!!!'
    setGreeting(newGreeting)
  }
  return(
    <>
    <h1>{greeting.greet}</h1>
    <button onClick={updateGreeting}>Update greeting</button>
    </>
  )
}
export default App;
