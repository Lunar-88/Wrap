
import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/bookingPage");
  };

  return (
    <div className="relative w-full h-[720px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="heros.png"
          alt="Green Volkswagen GTI car showcasing premium wrapping service"
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-150"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg opacity-0 animate-fadeIn">
          Transform Your Vehicle <br className="hidden sm:block" />
          With Our Premium <br className="hidden sm:block" />
          Services
        </h1>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-xl drop-shadow-md opacity-0 animate-fadeIn delay-200">
          Transform the appearance of your ride, giving it a unique
          <br className="hidden sm:block" />
          and personalized look. Professional installation,
          <br className="hidden sm:block" />
          superior materials, stunning results.
        </p>

        {/* Desktop button */}
        <div className="hidden md:block mt-6">
          <button
            onClick={handleBookingClick}
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md text-xl font-bold shadow-2xl transition-transform transform hover:scale-105">
            Book Now
          </button>
        </div>

        {/* Mobile button */}
        <div className="mt-10 md:hidden">
          <button
            onClick={handleBookingClick}
            className="bg-black hover:bg-gray-500 text-md text-white px-5 py-2 rounded-md font-bold shadow-md transition-transform transform hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
