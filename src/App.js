import { useState, useEffect} from 'react';

export default function App(){
  const [timer, setTimer] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Timer: {timer}</p>
    </div>
  )
}