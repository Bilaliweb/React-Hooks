import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
      <h1>Welcome to the basics of React {":)"}</h1>
      <h1>React Hooks {";)"}</h1>
    </>
  );
}
