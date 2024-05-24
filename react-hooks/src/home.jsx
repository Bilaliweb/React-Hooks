import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

/**
 * I've used Outlet component as I wanted to have specific navbar which I've implemented below in the middle of the page in each component.
 */
export default function Home() {
  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Something good is cooking just wait {":)"}</h1>
      <h1>React Hooks {";)"}</h1>
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
          <Link to="/useCallback">Use Callback</Link>
        </h2>
        <Outlet />
      </nav>
    </>
  );
}
