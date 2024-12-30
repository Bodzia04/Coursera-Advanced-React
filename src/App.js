import './App.css';
import { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value;
    console.log(inputValue);
    
  }
  return(
  <form onSubmit={handleSubmit}>
    <input ref={inputRef} type='text'/>
    <button type='submit'>Submit</button>
  </form>
  )
}

export default App;
