import React from "react";
import ClassComponent from "./classComponent";
import FunctionComponent from "./functionComponent";

export const ThemeContext =  React.createContext()

export default function UseContext(){
    const [darkTheme, setDarkTheme] = React.useState(true)

    function toggleTheme(){
        setDarkTheme(prevValue => !prevValue)
    }

    return(
        <div>
            <h1>Use Context Hook</h1>
            <ThemeContext.Provider value={darkTheme}>
                <button className="button" onClick={toggleTheme}>Toggle Theme</button>
                <FunctionComponent/>
                <ClassComponent/>
            </ThemeContext.Provider>
        </div>
    )
}