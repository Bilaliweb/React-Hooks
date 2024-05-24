import React, { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Context2() {
  const [user, setUser] = useState("Bilal Shahid");

  return (
    <div>
      <h1>Use Context Hook</h1>
      <UserContext.Provider value={user}>
        <h1>Hi, {user}</h1>
        <Component2 />
      </UserContext.Provider>
    </div>
  );

  function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }

  function Component3() {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }

  function Component4() {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 />
      </>
    );
  }

  function Component5() {
    const user = useContext(UserContext)
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }
}
