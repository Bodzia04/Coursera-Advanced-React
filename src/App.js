import { useState, useEffect} from 'react';

function useWindowWidth(){
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => {setWidth(window.innerWidth)};
    
    window.addEventListener('resize', handleWidth);
    
    return () => window.removeEventListener('resize', handleWidth);
  }, []); 
};
