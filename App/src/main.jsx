import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { myTheme } from "./components/ChakraComponents/Theme";
import { GlobalContextProvider } from "./context/GlobalContext";
import NotFound from "./pages/404";
import Favorites from "./pages/Favorites/Favorites";
import Form from "./pages/Form/Form";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Recipes from "./pages/Recipes/Recipes";
import Register from "./pages/Register/Register";
import Workouts from "./pages/Workouts/Workouts";
import RequiredAuth from "./components/RequiredAuth";
import { DescriptCard } from "./components/DescriptCard";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import { MyRecipes } from "./pages/Profile/MyRecipes";
import { DetailWorkout } from "./components/DetailWorkout";
import WorkoutDetails from "./pages/WorkoutDetails/WorkoutDetails";
import { MyWorkouts } from "./pages/Profile/MyWorkouts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <ChakraProvider theme={myTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              index
              element={
                <RequiredAuth>
                  <Home />
                </RequiredAuth>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
              path="profile"
              element={
                <RequiredAuth>
                  <Profile />
                </RequiredAuth>
              }
            />
            <Route
              path="workouts"
              element={
                <RequiredAuth>
                  <Workouts />
                </RequiredAuth>
              }
            />
            <Route
              path="recipes"
              element={
                <RequiredAuth>
                  <Recipes />
                </RequiredAuth>
              }
            />
            <Route
              path="/recipes/detail"
              element={
                <RequiredAuth>
                  <RecipeDetails />
                </RequiredAuth>
              }
            />
            <Route
              path="/workouts/detail"
              element={
                <RequiredAuth>
                  <WorkoutDetails />
                </RequiredAuth>
              }
            />
            <Route
              path="/perfil/misrecetas"
              element={
                <RequiredAuth>
                  <MyRecipes />
                </RequiredAuth>
              }
            />
             <Route
              path="/perfil/miswokouts"
              element={
                <RequiredAuth>
                  <MyWorkouts/>
                </RequiredAuth>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
);
