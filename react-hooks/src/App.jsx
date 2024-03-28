import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import State from "./useState/state";
import Effect from "./useEffect/effect";
import EffectEvents from "./useEffect/effect2";
import Memo from "./useMemo/memo";

function App() {
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
      <p>Here is the very basic implementation of React.useState()</p>
      {/**
       * Here value for props of Components are set
      */}
      <EffectEvents/>
      <State button1="Click to Increase" button2="Click to Decrease" />
      <Effect
        button1="Effect to Increase"
        button2="Effect to Decrease"
        json1="Posts"
        json2="Users"
        json3="Comments"
      />
      <Memo/>
    </>
  );
}

export default App;
