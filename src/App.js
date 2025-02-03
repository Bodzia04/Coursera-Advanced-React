import './App.css';
import { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('***useEffect');
  },[]);
  return(
    <h1>Title</h1>
  )
}
export default App;
