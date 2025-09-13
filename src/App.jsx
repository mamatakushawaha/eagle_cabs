import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import WebPrivateRoute from "./route/WebPrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all routes */}
        <Route element={<Layout />}>
          {/* Nested routes go here */}
          <Route path="/*" element={<WebPrivateRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
