import {useRef, useState, useEffect} from 'react';

function usePrevious(val){
  const ref = useRef();

  useEffect(() => {
    ref.current = val;
  }, [val]);

  return ref.current;
};

function App(){
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousDay = usePrevious(days[currentIndex]);
  
  function getNextDay(){
    setCurrentIndex((prevIndex) => (prevIndex + 1) % days.length);
  }

  return(
    <div>
      <h1>
        Today: {days[currentIndex]}
        {previousDay && `, Previous day: ${previousDay}`}
      </h1>
      <button onClick={getNextDay}>Next Day</button>
    </div>
  );
};

export default App;