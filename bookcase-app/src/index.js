import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Nav } from "./components/Header";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Home = () => {

  return <h1>Tobia was here</h1>
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" title="emohhhhh" element={<Home />}></Route>
        <Route path="/search" title="ciao ciao" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

