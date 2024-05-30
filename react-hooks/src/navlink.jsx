import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinkBar() {
  return (
    <nav>
      <h2>
        <NavLink
          to="/main/useState"
          style={({ isActive }) => {
            return { color: isActive ? "white" : "gray" };
          }}
        >
          Use State
        </NavLink>
        ---
        <NavLink
          to="/main/useEffect/simple"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "gray",
            };
          }}
        >
          Use Effect
        </NavLink>{" "}
        ---
        <NavLink
          to="/main/useEffect/events"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "gray",
            };
          }}
        >
          Use Effect events
        </NavLink>{" "}
        ---
        <NavLink
          to="/main/useMemo/simple"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "gray",
            };
          }}
        >
          Use Memo
        </NavLink>{" "}
        ---
        <NavLink
          to="/main/useMemo/memoise"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "gray",
            };
          }}
        >
          Memoise
        </NavLink>{" "}
        ---
        <NavLink
          to="/main/useRef"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "gray",
            };
          }}
        >
          Use Ref
        </NavLink>{" "}
        ---
        <NavLink
          to="/main/context"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "gray",
            };
          }}
        >
          Use Context
        </NavLink>{" "}
        ---
        <NavLink
          to="/main/useContext/part2"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "gray",
            };
          }}
        >
          Use Context Part 2
        </NavLink>{" "}
        ---
        <NavLink
          to="/main/useContext/part3"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "gray",
            };
          }}
        >
          Use Context Part 3
        </NavLink>{" "}
        ---
        <NavLink
          to="/main/useReducer"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "gray",
            };
          }}
        >
          Use Reducer
        </NavLink>{" "}
        ---
        <NavLink
          to="/main/useCallback"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "gray",
            };
          }}
        >
          Use Callback
        </NavLink>{" "}
        ---
        <NavLink
          to="/main/home"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "gray",
            };
          }}
        >
          Home
        </NavLink>
      </h2>
    </nav>
  );
}
