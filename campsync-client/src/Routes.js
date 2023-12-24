import { Router, Routes, Route } from "react-router-dom";
import Campaigns from "./pages/Campaigns";
import React from "react";

export const RoutesList = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Campaigns />}/>
                    
            </Routes>
        </Router>
    )
}