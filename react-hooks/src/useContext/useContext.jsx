import React, { useState, useContext, useDeferredValue } from "react";

/**
 * This useContext() hook is used to handle state gloabally and can be used together with useState() hook to share state between deeply nested components
 */
// If we don't use this then we have to pass the props down to each child component and that is called 'prop drilling'. We'll also check this as well.

// Let's check prop drilling first. We'll be passing state of parent component down to each child component's prop value. Solution for this will be in useContext2.jsx file.
export default function Context1() {
  const [user, setUser] = useState("Bilal Shahid");

  return (
    <div>
      <h1>Use Context Hook: Prop Drilling</h1>
      <h1>Hi, {user}</h1>
      <Component2 user={user} />
    </div>
  );

  function Component2({ user }) {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 user={user} />
      </>
    );
  }

  function Component3({ user }) {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 user={user} />
      </>
    );
  }

  function Component4({ user }) {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 user={user} />
      </>
    );
  }

  function Component5({ user }) {
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }
}
