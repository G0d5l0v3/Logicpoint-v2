import React, { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


const App = () => {
  const HomePage = lazy(() => import("./pages/home/HomePage"));
  const AboutPage = lazy(() => import("./pages/about-us/AboutPage"));
  const ServicePage = lazy(() => import("./pages/services/ServicePage"));
  const ShopPage = lazy(() => import("./pages/shop-products/ShopPage"));
  const ContactUs = lazy(() => import("./pages/contact-us/ContactUs"));
  const Cart = lazy(() => import("./pages/cart/Cart"));
  const NotFoundPage = lazy(() => import ("./pages/not-found/NotFoundPage"))
  const ServicesWeOffer = lazy(() => import ("./pages/home/sections/ServicesWeOffer"))

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#E87B37",
          },
        }}
      >

        <Navbar />
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/shop-products" element={<ShopPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/test" element={<ServicesWeOffer />} />
          </Routes>
          <Footer />
        </Suspense>
      </ConfigProvider>
    </>
  );
};

export default App;
