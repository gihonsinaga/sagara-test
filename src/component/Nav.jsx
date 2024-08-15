import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const getLinkClass = (path) => {
    return location.pathname === path ? "border-b-2 border-red-800" : "";
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 bg-white bg-opacity-80 shadow-lg transition-all duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex">
            <img className="w-30 h-10" src="/assets/Logo.svg" alt="Logo" />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-gray-500">
                <Link
                  to="/certification"
                  className={`px-3 py-2  text-sm font-medium ${getLinkClass(
                    "/certification"
                  )}`}
                >
                  IT CERTIFICATION
                </Link>
                <Link
                  to="/careers"
                  className={`px-3 py-2 text-sm font-medium ${getLinkClass(
                    "/careers"
                  )}`}
                >
                  CAREERS
                </Link>
                <Link
                  to="/FAQ"
                  className={`px-3 py-2  text-sm font-medium ${getLinkClass(
                    "/FAQ"
                  )}`}
                >
                  FAQ
                </Link>
                <Link
                  to="/"
                  className={`px-3 py-2  text-sm font-medium ${getLinkClass(
                    "/"
                  )}`}
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => navigate("/dashboard")}
              className="bg-red-800 py-2 px-5 text-white rounded text-sm cursor-pointer"
            >
              Dashboard
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
