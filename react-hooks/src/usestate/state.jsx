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

  const onFirstNumber = state === 0
  const onLastNumber = state === 10

  // To set limit 
//   if(state > 10 || state < 0){
//     setState(false)
//   }

  return (
    <div id="number">
      <h1>Use State Hook</h1>
      <h2>Sample for changing state of number: {state}</h2>
      <button id='btn' onClick={increaseNumber} disabled={onLastNumber}>{props.button1}: {state}</button>
      <button id='btn' onClick={decreaseNumber} disabled={onFirstNumber}>{props.button2}: {state}</button>
    </div>
  );
}

export default State;
