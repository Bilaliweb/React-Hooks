import React, {useState} from 'react';
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
import SharedLayout from "./sharedLayout";
import DefaultScreen from "./defaultScreen";
import Login from "./login";
import Dashboard from "./dashboard";
import ProtectedRoute from './protectedRoute';

function App() {
  const [user, setUser] = useState(null)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultScreen />}></Route>
          <Route path="login" element={<Login setUser={setUser}/>}></Route>
          <Route path="dashboard" element={
            <ProtectedRoute user={user}>
                <Dashboard user={user}/>
            </ProtectedRoute>
        }>
          </Route>
          {/** Nested Routing */}
          <Route path="main" element={<SharedLayout />}>
            <Route path="home" element={<Home />}/>
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
              path="useEffect/simple"
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
            <Route path="useMemo/simple" element={<Memo />} />
            <Route path="useMemo/memoise" element={<Memoise />} />
            <Route path="useRef" element={<Ref />} />
            <Route path="context" element={<Context1 />} />
            <Route path="useContext/part2" element={<Context2 />} />
            <Route path="useContext/part3" element={<UseContext />} />
            <Route path="useReducer" element={<UseReducer />} />
            <Route path="useCallback" element={<UseCallBack />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
