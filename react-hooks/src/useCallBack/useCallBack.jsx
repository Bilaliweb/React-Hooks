import React, { useState, useMemo, useCallback } from "react";
import List from "./list";

/**
 * One important thing that this useCallBack() hook is very similar to useMemo() hook but the difference is useMemo() returns you the return/memoized value of a function and useCallBack() returns the memoized callback function.
 * 
 * Also this hook can also be used at the moment where we are concerned about the referential equality because everytime component is rendered there is a new reference to a specific function or object so to avoid this useCallback() would be beneficial just like useMemo() even if there is a function which is too slow when it executes, this hook would be good to use.
 */

export default function UseCallBack() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // If we've used useMemo() here it would throw an error: getItems() is not a function because we are using getItems as a function in List component and useMemo() doesn't return a function but only return value of that function. This is why useCallback() is used instead
  const getItems = useCallback((increment) => {
    return [count + increment, count + 1 + increment, count + 2 + increment];
  }, [count]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      ></input>
      <button onClick={(e) => setDark(prevValue => !prevValue)}>Toggle Theme</button>

      <List getItems={getItems}/>
    </div>
  );
}
