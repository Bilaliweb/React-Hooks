import React from "react";
import { Navigate } from "react-router-dom";

/**
 * I've restricted a specific route so there is a good logic implemented and a user can't visit that page manually without login
 */
export default function ProtectedRoute({children, user}){
    if(!user){
        return <Navigate to='/'/>
    }
    return children;
}