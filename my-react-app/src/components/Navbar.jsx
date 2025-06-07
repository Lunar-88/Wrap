
function Navbar() {
  return (
    <div className="w-full bg-white mx-auto fixed top-0 z-50">
    <nav class="flex bg-white aria-label w-full justify-between items-center px-10 py-10 shadow-md mx-auto">
       <div className="pl-10">
         <img src="logos.png" alt="logo" class="h-10 w-10 scale-[8] ml-10"/>
       </div>
       
       <ul className="flex space-x-12 gap-x-14 font-semibold text-lg w-100 justify-center items-center">
          <li><a href="#home" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">Home</a></li>
          <li><a href="#about" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">Services</a></li>
          <li><a href="#services" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">FAQs</a></li>
          <li><a href="#contact" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">Contact</a></li>
        </ul>
       
        <div className="bg-black hover:bg-slate-700 text-white px-4 py-2 rounded-md ">
          <button class="font-semibold ">Book Now</button>
        </div>
    </nav>
    </div>
  );
}

export default Navbar;