import React from "react";
import { Link } from "react-router-dom";

export default function DefaultScreen(){
    return(
        <>
        <h1>Please visit Log in page to enjoy basics of React</h1>
        <h2><Link to='/login'>Log in {'->'}</Link></h2>
        </>
    )
}