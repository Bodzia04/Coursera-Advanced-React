import React from 'react';

function List({children}){
  return <ul>{React.Children.map(children, (child) => <li>{child}</li>)}</ul>
}

export default function App(){
  return (
    <List>
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
    </List>
  )
}