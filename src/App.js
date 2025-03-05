import React from 'react';

const Person1 = () => {
  const [money, setMoney] = React.useState(10);

  function handleIncrease(){
    setMoney(money * 2);
  }
  return(
    <div>
      <h2>Bohdan has money ${money}</h2>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

const Person2 = () => {
  return(
    <div>
      <h2>Vova has money $10</h2>
      <button>Increase</button>
    </div>
  )
}

export default function App(){
  return(
    <div>
      <Person1/>
      <Person2/>
    </div>
  )
}