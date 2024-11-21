import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage/homePage.js";
import DestPage from "../components/destPage/destPage.js";
import RoutePage from "../components/RoutePage/routePage.js";
import AboutProject from "../components/AboutProject/AboutProject.js";
import Places from "../components/Places/places.js";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dest-page" element={<DestPage />} />
        <Route path="/route/:id" element={<RoutePage />} />
        <Route path="/aboutProject" element={<AboutProject />} />
        <Route path="/places" element={<Places />} />
    </Routes>
  );
};

export default AppRoutes;
