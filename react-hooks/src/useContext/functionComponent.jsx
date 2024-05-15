import React from "react";
import { ThemeContext } from "./useContext3";

export default function FunctionComponent(){
    const darkTheme = React.useContext(ThemeContext) 
    const themeStyles =  {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return(
        <div style={themeStyles}>Function Theme</div>
    )
}