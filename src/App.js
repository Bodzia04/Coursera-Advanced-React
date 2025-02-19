import React from 'react'

function Wrapper({children}){
  return (
  <div className='wrapper'>
    {React.Children.map(children, (child) => (
      React.cloneElement(child, {className: 'staled-child'})
    ))}
  </div>  
  )
}

export default function App(){
  return(
    <Wrapper>
      <p>mtngbrfvd</p>
      <p>ntrefrtnnbrrghgb</p>
    </Wrapper>
  )
}