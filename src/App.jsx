import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  const HomePage = lazy(() => import("./pages/home/HomePage"));
  const AboutPage = lazy(() => import("./pages/about-us/AboutPage"));
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <h1 className="font-[exo] flex items-center justify-center h-[80svh]">
            Loading...
          </h1>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
