import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./nav";
import Home from "./home";
import Html from "./html";
import Css from "./css";
import Jaat from "./jaat";
import Re from "./Re";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Nav />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/html" element={<Html />} />
            <Route path="/css" element={<Css />} />
            <Route path="/js" element={<Jaat />} />
            <Route path="/re" element={<Re />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;