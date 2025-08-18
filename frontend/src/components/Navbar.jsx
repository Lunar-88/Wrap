
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleBookingClick = () => {
    navigate("/bookingPage");
    setIsOpen(false); // Close menu after navigating
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="w-full bg-white fixed top-0 z-50 shadow-md">
      <nav className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div>
          <img
            src="logos.png"
            alt="Company Logo"
            className="h-16 w-16 scale-[5] object-contain pl-4"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-semibold text-lg items-center">
          <li>
            <Link
              to="/"
              className="hover:text-white hover:bg-black px-4 py-2 rounded-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-white hover:bg-black px-4 py-2 rounded-md"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/media"
              className="hover:text-white hover:bg-black px-4 py-2 rounded-md"
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              to="/faqs"
              className="hover:text-white hover:bg-black px-4 py-2 rounded-md"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-white hover:bg-black px-4 py-2 rounded-md"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={handleBookingClick}
            className="bg-black hover:bg-gray-700 text-white px-5 py-2 rounded-md font-semibold"
          >
            Book Now
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        role="dialog"
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white px-6 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={28} />
        </button>

        {/* Links */}
        <ul className="flex flex-col gap-4 font-semibold text-lg mt-12">
          <li>
            <Link className="block py-2 w-full" to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 w-full"
              to="/services"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 w-full"
              to="/media"
              onClick={toggleMenu}
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 w-full"
              to="/faqs"
              onClick={toggleMenu}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 w-full"
              to="/contact"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={handleBookingClick}
              className="bg-black hover:bg-gray-700 text-white px-5 py-2 rounded-md font-semibold w-full text-center"
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
