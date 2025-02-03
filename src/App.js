import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Таймер працює...');
    }, 1000);

    return () => {
      clearInterval(interval); // Очищення таймера перед видаленням компонента
      console.log('Таймер зупинено.');
    };
  }, []); // Виконується лише один раз

  return <h1>Таймер запущено</h1>;
}

export default Ap
