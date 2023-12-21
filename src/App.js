import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./Config/Routes";
import Login from "./Pages/Login";

import "./assets/style/style.css";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import User from "./Pages/User";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.USER} element={<User />} />
      </Routes>
    </>
  );
}

export default App;
