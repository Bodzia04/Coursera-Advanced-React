import React from 'react';

const User = ({name}) => {
  return(
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default function App(){
  return(
    <User name='Bohdan'></User>
  )
}