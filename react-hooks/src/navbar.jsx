import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h2>
        <Link to="/useState">Use State</Link> ---
        <Link to="/useEffect">Use Effect</Link> ---
        <Link to="/useEffect/events">Use Effect events</Link> ---
        <Link to="/useMemo">Use Memo</Link> ---
        <Link to="/useMemo/memoise">Memoise</Link> ---
        <Link to="/useRef">Use Ref</Link> ---
        <Link to="/useContext">Use Context</Link> ---
        <Link to="/useContext/part2">Use Context Part 2</Link> ---
        <Link to="/useContext/part3">Use Context Part 3</Link> ---
        <Link to="/useReducer">Use Reducer</Link> ---
        <Link to="/useCallback">Use Callback</Link> ---
        <Link to='/'>Home</Link>
      </h2>
    </nav>
  );
}
