
function Hero() {
  return (
    <div class="relative w-full h-[720px] overflow-hidden ">
      <div className="overflow-hidden absolute inset-0">
         <img src="hero2.png" alt="Hero image"
         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
      </div>
  
      <div class="absolute inset-0 flex flex-col  justify-center  ml-auto pl-10">
        <h1 class="text-5xl  font-bold text-gray-100 leading-tight drop-shadow-lg">
          Transform Your Vehicle<br />With Our Premium <br />Services
        </h1>
        <p class="mt-6 text-2xl text-gray-200 max-w-2xl drop-shadow-md">
            Transform the appearance of your ride, giving it a unique<br />
            and personalized look. Professional installation,<br />
            superior materials, stunning results.
        </p>
        <div class="mt-8">
          <button class="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition duration-300 font-bold text-lg">
          Book Now
          </button>
        </div>
      </div>

    </div>
  
  );
}

export default Hero;