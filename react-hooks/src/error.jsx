import React from "react";
import { Link } from "react-router-dom";

export default function Error(){
    return(
        <div style={{textAlign: 'center'}}>
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to='/'>Go Back To Home Page</Link>
        </div>
    )
}