import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/about-us/AboutPage";

const App = () => {
  const HomePage = lazy(() => import("./pages/home/HomePage"));
  const AboutPage = lazy(() => import("./pages/about-us/AboutPage"))
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1 classname="font-[exo] flex items-center justify-center h-screen">Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
