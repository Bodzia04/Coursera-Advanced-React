import { useState, useEffect } from 'react';

function App() {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    document.title = toggle ? 'Toggle is valid: true' : 'Title';
  },[toggle])

  return(
    <div>
      <h1>Title</h1>
      <button onClick={clickHandler}>Toggle message</button>
      {toggle && <p>Toggle is valid: true</p>}
    </div>
  )
}

export default App
