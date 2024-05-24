import React, { useState, useEffect, useMemo } from "react";

export default function Memo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => { return expensiveCalculation(count) }, [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo in array"]);
  };

  return (
    <>
      <div>
        <h1>Use Memo Hook</h1>
        <h2>My Todos</h2>
        {todos.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
        <button onClick={addTodo}>Add Item</button>
      </div>
      <br />
      <div>
        <h2>Expensive Calculation: {calculation}</h2>
        <h3>Count: {count}</h3>
        <button onClick={increment}>Add Count</button>
      </div>
    </>
  );
}

const expensiveCalculation = (num) => {
  console.log("Calculating...", num);
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
