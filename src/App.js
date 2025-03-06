import React from 'react'

const User = ({name}) => {
  return <h2>Hello {name}</h2>
}

const withBorder = (WrappedComponent) => {
  return (props) => (
    <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
      <WrappedComponent {...props}/>
    </div>
  )
}

const UserWithBorder = withBorder(User);

export default function App(){
  return (
    <div>
      <UserWithBorder name='Alice'/>
      <UserWithBorder name='Jorgh'/>
    </div>
  )
}