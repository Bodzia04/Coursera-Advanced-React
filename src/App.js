import React from 'react';

const updatedComponent = (OriginalComponent) => {
  function NewComponent(){
    const [money, setMoney] = React.useState(10);
    function handleIncrease(){
      setMoney(money * 2);
    }
    return <OriginalComponent handleIncrease={handleIncrease} money={money}/>
  }
  return NewComponent;
}

const Person1 = ({handleIncrease, money}) => {
  return(
    <div>
      <h2>Bohdan has money ${money}</h2>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

const Person2 = ({handleIncrease, money}) => {
  return(
    <div>
      <h2>Vova has money ${money}</h2>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

const EnhancedPerson1 = updatedComponent(Person1);
const EnhancedPerson2 = updatedComponent(Person2);

export default function App(){
  return(
    <div>
      <EnhancedPerson1/>
      <EnhancedPerson2/>
    </div>
  )
}