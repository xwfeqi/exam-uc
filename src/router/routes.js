import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/homePage/homePage.js";
import DestPage from "../components/destPage/destPage.js";
import RoutePage from "../components/routePage/routePage.js"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dest-page" element={<DestPage />} />
        <Route path="/route/:id" element={<RoutePage />} />
    </Routes>
  );
};

export default AppRoutes;
