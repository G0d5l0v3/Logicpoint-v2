import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  const HomePage = lazy(() => import("./pages/home/HomePage"));
  const AboutPage = lazy(() => import("./pages/about-us/AboutPage"));
  const ServicePage = lazy(() => import("./pages/services/ServicePage"));
  const ShopPage = lazy(() =>  import("./pages/shop-products/ShopPage"));
  const ContactUs = lazy(() => import("./pages/contact-us/ContactUs"));
  const Cart = lazy(() => import("./pages/cart/Cart"))
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
          <Route path="/services" element={<ServicePage />} />
          <Route path="/shop-products" element={<ShopPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
