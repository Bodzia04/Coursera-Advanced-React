import './App.css';
import { useRef, useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

const Toolbar = () => {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>
}

function App() {
  return(
    <ThemeContext.Provider value='dark'>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

export default App;
