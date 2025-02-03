import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count:', count);
  }, [count])

  return(
    <>
    <p>Counter: {count}</p>
    <button onClick={() => setCount(count + 1)}>Enlarge</button>
    </>
  )
}
export default App;
