import React from 'react';

const obj = {
  id: 1,
  item: 'Orange'
}

const copyObj = {...obj, item: 'Apple'};
console.log('copyObj',copyObj);
console.log('obj', obj);


const Row = ({children}) => {
  return(
    <div className='Row'>
      {React.Children.map(children, (child, index) => {
        return child
      })}
    </div>
  )
};

export default function App(){
  return(
    <div className='App'>
      <Row spasing={32}>
        <p>Bohdan</p>
        <p>Marchuk</p>
        <p>20 years</p>
      </Row>
    </div>
  )
}