
function Hero() {
  return (
      <div className="relative w-full h-[720px] overflow-hidden">
        {/* Hero image */}
        
          <div className="absolute inset-0 w-full h-full">
            <img
              src="hero2.png"
              alt="Hero image"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-150"
            />
          </div>
        
    
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 text-left md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
            Transform Your Vehicle<br className="hidden sm:block" />With Our Premium <br className="hidden sm:block" />Services
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-xl drop-shadow-md">
            Transform the appearance of your ride, giving it a unique
            <br className="hidden sm:block" />
            and personalized look. Professional installation,
            <br className="hidden sm:block" />
            superior materials, stunning results.
          </p>
          <div className="mt-6 sm:mt-8">
            <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition duration-300 font-bold text-base sm:text-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>  
  
  );
}

export default Hero; 