
import { useState } from "react";
import logo from "../assets/images/logo.png";

function Navbar({ onVehiclesClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleVehiclesClick = () => {
    setIsOpen(false);

    if (onVehiclesClick) {
      onVehiclesClick();
    }
  };

  return (
    <nav className="navbar-animate sticky top-0 z-50 w-full bg-white text-slate-900 shadow-md">
      <div className="w-full px-6 sm:px-8 lg:px-12">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center focus:outline-none"
            aria-label="Go to home"
          >
            <img
              src={logo}
              alt="EasyDrive Logo"
              className="h-19 w-auto object-contain logo-animate"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {/* Home */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="nav-link-animate font-medium text-slate-800 hover:text-blue-900"
            >
              Home
            </button>

            {/* Vehicles */}
            <button
              type="button"
              onClick={handleVehiclesClick}
              className="nav-link-animate font-medium text-slate-800 hover:text-blue-900"
            >
              Vehicles
            </button>

            {/* About */}
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="nav-link-animate font-medium text-slate-800 hover:text-blue-900"
            >
              About
            </button>

            {/* Contact */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="contact-btn-animate bg-blue-950 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-900"
            >
              Contact
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-950 text-3xl focus:outline-none transition-transform duration-300"
            aria-label="Toggle menu"
          >
            <span
              className={`inline-block transition-transform duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {isOpen ? "✕" : "☰"}
            </span>
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-menu-animate md:hidden pb-5">

            {/* Home */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="mobile-link-animate w-full text-left block py-3 border-b border-slate-200 font-medium text-slate-800 hover:text-blue-950"
            >
              Home
            </button>

            {/* Vehicles */}
            <button
              type="button"
              onClick={handleVehiclesClick}
              className="mobile-link-animate w-full text-left block py-3 border-b border-slate-200 font-medium text-slate-800 hover:text-blue-950"
            >
              Vehicles
            </button>

            {/* About */}
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="mobile-link-animate w-full text-left block py-3 border-b border-slate-200 font-medium text-slate-800 hover:text-blue-950"
            >
              About
            </button>

            {/* Contact */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mobile-link-animate w-full text-left block py-3 font-medium text-slate-800 hover:text-blue-950"
            >
              Contact
            </button>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
