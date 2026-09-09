import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-blue-950 text-white mt-16">

      {/* Main Footer */}
      <div className="w-full px-6 sm:px-8 lg:px-12 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo / About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold">
                DriveEasy
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Your trusted car rental partner. Find the perfect vehicle
              for your journey and enjoy a simple, convenient rental
              experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="space-y-3">
              <Link
                to="/"
                className="block text-slate-300 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/vehicles"
                className="block text-slate-300 hover:text-white transition"
              >
                Vehicles
              </Link>

              <Link
                to="/bookings"
                className="block text-slate-300 hover:text-white transition"
              >
                My Bookings
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Company
            </h3>

            <div className="space-y-3">
              <Link
                to="/about"
                className="block text-slate-300 hover:text-white transition"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="block text-slate-300 hover:text-white transition"
              >
                Contact Us
              </Link>

              <a
                href="#"
                className="block text-slate-300 hover:text-white transition"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-3 text-slate-300">
              <p>📍 Johannesburg, South Africa</p>
              <p>📞 +27 12 345 6789</p>
              <p>✉️ info@driveeasy.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-900">
        <div className="w-full px-6 sm:px-8 lg:px-12 py-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-sm text-slate-400 text-center md:text-left">
              © 2026 DriveEasy. All rights reserved.
            </p>

            <p className="text-sm text-slate-300">
              Designed by{" "}
              <span className="text-pink-500 font-semibold">
                niceCoding
              </span>
            </p>

          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;