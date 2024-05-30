import React, { useEffect, useMemo, useState } from "react";
/**
 * There are 2 major useCases for using useMemo:
 * 1. If there is a function which is used very often and is incredibly slow we can wrap that function in useMemo()
 *
 * 2. Referential Equality:
 *                As in JS Objects and Arrays have different reference against another even if they also have the same values as in previous Objects or Arrays. To memorise the reference so there is no need for rerender we can use useMemo()
 */
export default function Memoise() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);
  // Memoising the value for slowFunction()
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleClick = () => {
    setTheme((prevValue) => {
      return !prevValue;
    });
  };

  // Memoising the theme so it is not rerendered on change of number
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: theme ? "black" : "white",
      color: theme ? "white" : "black",
      marginTop: 3,
    };
  }, [theme]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  return (
    <div>
      <h1>Memoisation by using Use Memo Hook</h1>
      <input type="number" value={number} onChange={handleChange}></input>
      <br />
      <button className="button" onClick={handleClick} style={{ marginTop: 4 }}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

// Incredibly Slow Function
const slowFunction = (num) => {
  console.log("Slowing down...", num);
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
};
