import './App.css';
import { createContext, useState, useContext } from 'react';

function App() {
  const [greeting, setGreeting] = useState(
    {
    greet: 'Hello',
    place: 'world'
    }
  )
  
  function updateGreeting(){
    setGreeting(prevState => {
      return {...prevState, place: 'Bohdan'}
    })
  }
  return(
    <>
    <h1>{greeting.greet}, {greeting.place}</h1>
    <button onClick={updateGreeting}>Update greeting</button>
    </>
  )
}
export default App;
