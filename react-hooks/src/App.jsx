import State from "./useState/state";
import Effect from "./useEffect/effect";
import EffectEvents from "./useEffect/effect2";
import Memo from "./useMemo/memo";
import Memoise from "./useMemo/memo2";
import Ref from "./useRef/useRef";
import Context1 from "./useContext/useContext";
import Context2 from "./useContext/useContext2";
import UseContext from "./useContext/useContext3";
import UseReducer from "./useReducer/useReducer";
import UseCallBack from "./useCallBack/useCallBack";
import Home from "./home";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Error from "./error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/** Nested Routing */}
          <Route path="/" element={<Home />}>
            <Route
              path="useState"
              element={
                <State
                  button1="Click to Increase"
                  button2="Click to Decrease"
                />
              }
            />
            <Route
              path="useEffect"
              element={
                <Effect
                  button1="Effect to Increase"
                  button2="Effect to Decrease"
                  json1="Posts"
                  json2="Users"
                  json3="Comments"
                />
              }
            />
            <Route path="useEffect/events" element={<EffectEvents />} />
            <Route path="useMemo" element={<Memo />} />
            <Route path="useMemo/memoise" element={<Memoise />} />
            <Route path="useRef" element={<Ref />} />
            <Route path="useContext" element={<Context1 />} />
            <Route path="useContext/part2" element={<Context2 />} />
            <Route path="useContext/part3" element={<UseContext />} />
            <Route path="useReducer" element={<UseReducer />} />
            <Route path="useCallback" element={<UseCallBack />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <a href={`${(<State />)}`}>Use State Hook</a> */}
      {/* <Link to={"useState"}>Use State</Link>
      <br />
      <Link to={"useEffect"}>Use Effect</Link>
      <br />
      <h1>{<Link to={"useRef"}>Use Ref</Link>}</h1> */}
      {/* <p>Here is the very basic implementation of React.useState()</p> */}
      {/**
       * Here value for props of Components are set
       */}
      {/* <UseCallBack/> */}
    </>
  );
}

export default App;
