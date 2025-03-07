import React from 'react';

function Message(props){
  return(
    <div>{props.text}</div>
  );
};

const withRandomColor = (WrappedComponent) => {
  return (props) => {
    const randomColor = getRandomColor();
    return (
      <div style={{color: randomColor}}>
        <WrappedComponent {...props}/>
      </div>
    )
  }
}

const getRandomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);
const MessageWithRandomColor = withRandomColor(Message);

export default function App(){
  return(
    <MessageWithRandomColor text='Hello, HOC!'/>
  );
};