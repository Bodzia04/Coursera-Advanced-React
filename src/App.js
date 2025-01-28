import './App.css';
import { createContext, useState, useContext } from 'react';

function App() {
  const name = 'Bohdan';
  const age = 20;
  return(
    <ul>
      <li>{`${name} - ${age} year`}</li>
    </ul>
  )
}
export default App;
