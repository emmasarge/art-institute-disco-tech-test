import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./utls/ScrollToTop";
import { Layout } from "./pages/Layout";
import { NoPage } from "./pages/NoPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";


export default function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/artwork/:id" element={<DetailPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

  

