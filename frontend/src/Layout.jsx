import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";
import backgroundImage from "./images/mid.png";
import earthImage from "./images/earth.png";
import { useEffect } from "react";
import Lenis from "lenis";

function Layout() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  const location = useLocation(); // Get the current location

  return (
    <div className="layout flex flex-col min-h-screen bg-black text-white relative">
      <Navbar />

      {/* Conditionally render earthImage only on the home ("/") route */}
      {location.pathname === "/" && (
        <img
          src={earthImage}
          alt="Earth"
          className="absolute inset-0 w-full h-full object-cover opacity-30 md:opacity-40 lg:opacity-50"
        />
      )}

      <div className="flex-grow relative z-10 overflow-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <Outlet />
      </div>

      {/* Background Image at the bottom */}
      <div className="absolute inset-x-0 bottom-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Footer on top of the image */}
      <Footer className="relative z-20 bg-gray-800 bg-opacity-75 w-full text-sm sm:text-base md:bg-opacity-85 px-4 sm:px-6 md:px-8 lg:px-16 py-4 md:py-6" />
    </div>
  );
}

export default Layout;
