import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Icon package (optional)

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleBookingClick = () => {
    navigate('/bookingPage');
    setIsOpen(false); // Close menu after navigating
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full bg-white fixed top-0 z-50 shadow-md">
      <nav className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div>
          <img src="logos.png" alt="Company Logo" className="h-16 w-16  scale-[5] object-contain pl-4" />
        </div>

        {/* Hamburger Button */}
        <button onClick={toggleMenu} className="md:hidden text-black focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-semibold text-lg items-center">
          <li><Link to="/" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">Home</Link></li>
          <li><Link to="/Ourservices" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">Services</Link></li>
          <li><Link to="/Media" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">Media</Link></li>
          <li><Link to="/FAQs" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">FAQs</Link></li>
          <li><Link to="/Contact" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">Contact</Link></li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button
            onClick={handleBookingClick}
            className="bg-black hover:bg-gray-700 text-white px-5 py-2 rounded-md font-semibold"
          >
            Book Now
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 font-semibold text-lg">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/Ourservices" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/Media" onClick={toggleMenu}>Media</Link></li>
            <li><Link to="/FAQs" onClick={toggleMenu}>FAQs</Link></li>
            <li><Link to="/Contact" onClick={toggleMenu}>Contact</Link></li>
            <li>
              <button
                onClick={handleBookingClick}
                className="bg-black hover:bg-gray-700 text-white px-5 py-2 rounded-md font-semibold w-full text-left">Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
