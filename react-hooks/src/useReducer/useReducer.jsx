import React, { useReducer, useState } from "react";
import Todo from "./todo";

/**
 * One simple benefit for this hook is that instead of using handleEvents for every logic we can use dispatch and define the logic inside of reducer function and we can use dispatch function anywhere we want to use against the action we want. This would be a bit complex way but still more efficient way rather then to hard code everything.
 */

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo"
};

const reducer = (todos, action) => {
  switch (action.type) {
      case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
        return todos.map((todo) => {
            if(todo.id === action.payload.id){
                return {...todo, complete: !todo.complete}
            }
            return todo;
        })
    case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id !== action.payload.id )
    default:
        return todos;
  }
};

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function UseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>;
      })}
    </div>
  );
}
