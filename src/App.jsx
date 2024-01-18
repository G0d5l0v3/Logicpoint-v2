import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const HomePage = lazy(() => import("./pages/home/HomePage"));
  const About = lazy(() => import("./pages/about-us/About"))
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1 classname="font-[exo]">Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
