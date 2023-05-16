import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Music from "../pages/Music";
import Commands from "../pages/Commands";

const RouteApp = () => {
   return(
       <Routes>
           <Route element={<Home/>} path="/" />
           <Route element={<Dashboard/>} path="/dashboard" />
           <Route element={<Commands/>} path="/commands" />
           <Route element={<Music/>} path="/music" />
       </Routes>
   )
}

export default RouteApp;