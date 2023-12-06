import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Entertainment from "./pages/Entertainment";
import Sport from "./pages/Sport";
import Technology from "./pages/Technology";
import MainLayout from "./layout/MainLayout";
import Economy from "./pages/Business";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/business" element={<Economy />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/technology" element={<Technology />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
