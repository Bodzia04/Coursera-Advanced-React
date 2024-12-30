import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value);
  }
  return(
    <form onSubmit={handleSubmit}>
      <input 
        value={value}
        onChange={handleChange}
        type='text'
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App;
