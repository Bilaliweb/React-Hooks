import React from "react";

function State(props) {
  const [state, setState] = React.useState(0);

  console.log('Default state of number: ', state)

  // Event handler to increase number
  const increaseNumber = () => {
    console.log('This is number ++ : ', state)
    setState(state+1)
  }

  // Event handler to decrease number
  const decreaseNumber = () => {
    console.log('This is number -- : ', state)
    setState(state-1)
  }

  // To set limit 
  if(state > 10 || state < 0){
    setState(false)
  }

  return (
    <div id="number">
      <h2>Sample for changing state of number: {state}</h2>
      <button id='btn' onClick={increaseNumber}>{props.button1}: {state}</button>
      <button id='btn' onClick={decreaseNumber}>{props.button2}: {state}</button>
    </div>
  );
}

export default State;
