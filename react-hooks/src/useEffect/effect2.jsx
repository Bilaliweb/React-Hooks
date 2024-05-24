import React, { useEffect, useState } from "react";

export default function EffectEvents() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // For adding and removing eventListeners for cleaning
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // For CleanUp and to avoid app from getting slowed down or crashing there should be a 'return()' which will be removing eventListner which was recently used
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Handling Events using Use Effect Hook</h1>
      <h2>We'll see the window's dynamic width here: {windowWidth}</h2>
    </div>
  );
}
