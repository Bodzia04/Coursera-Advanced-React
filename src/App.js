import {useState, useEffect, useRef} from 'react';

export default function App(){
  const [hour, setHour] = useState();
  const intervalRef = useRef();

  useEffect(() => {
    startHour();

    return () => clearInterval(intervalRef.current);
  }, []);

  function stopHour(){
    clearInterval(intervalRef.current)
  }

  function startHour(){
    intervalRef.current = setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000)

  }

  return (
    <div>
      <p>Hour: {hour}</p>
      <button onClick={stopHour}>Stop</button>
      <button onClick={startHour}>Start</button>
    </div>
  )
  

}