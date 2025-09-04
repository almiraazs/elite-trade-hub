import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import komponen
import Nav from "./component/navbar/nav";
import Home from "./component/homepag/home";
import About from "./component/aboutUs/about";
import WhyChooseUs from "./component/service/whychooseus";
import Footer from "./component/Footer/footer";
import Payment from "./component/Payment/payment";
import ServiceSection from "./component/service/ServiceSection";
import ScrollToTop from "./component/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Supaya tiap pindah halaman auto scroll ke atas */}
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 to-black text-white">
        {/* Navbar */}
        <Nav />

        {/* Konten Halaman */}
        <div className="flex-1">
          <Routes>
            {/* Landing Page dengan section scroll */}
            <Route
              path="/"
              element={
                <>
                  <div id="home">
                    <Home />
                  </div>
                  <div id="about">
                    <About />
                  </div>
                  <div id="payment">
                    <Payment />
                  </div>
                </>
              }
            />

            {/* WhyChooseUs Halaman Khusus */}
            <Route path="/why-choose-us" element={<WhyChooseUs />} />

            {/* Services Halaman Khusus */}
            <Route path="/services" element={<ServiceSection />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
