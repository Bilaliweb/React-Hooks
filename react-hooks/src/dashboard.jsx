import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard({ user }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/main/home");
  };
  return (
    <>
      <h1>Hi {user?.name}, Welcome to dashboard page.</h1>
      <h2>Click below button to start</h2>
      <button className="button" onClick={handleClick}>
        Getting Started
      </button>
    </>
  );
}
