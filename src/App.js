import React from 'react';
import './App.css'
function reducer(state, action){
  if(action.type === 'decrement') return {money: state.money - 10};
  if(action.type === 'increment') return {money: state.money + 10};
}
function App() {


  const initialState = {money: 100}
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <div className='App'>
      <h1>Wallet: {state.money}</h1>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
    </div>
  )
}

export default App
