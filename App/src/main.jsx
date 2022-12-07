import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { GlobalContextProvider } from "./context/GlobalContext";
import NotFound from "./pages/404";
import Form from "./pages/Form/Form";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/login";
import Profile from "./pages/Profile/Profile";
import Recipes from "./pages/Recipes/Recipes";
import Register from "./pages/Register/Register";
import Workouts from "./pages/Workouts/Workouts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="register/form" element={<Form />} />
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="workouts" element={<Workouts />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>,
);
