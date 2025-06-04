
function Navbar() {
  return (
    <nav class="flex bg-">
       <div>
         <img src="logo.png" alt="logo" class="h-10 w-10" />
       </div>
        <ul class="flex space-x-4">
          <li><a href="#home" class="hover:text-blue-200">Home</a></li>
          <li><a href="#about" class="hover:text-blue-200">About</a></li>
          <li><a href="#services" class="hover:text-blue-200">Services</a></li>
          <li><a href="#contact" class="hover:text-blue-200">Contact</a></li>
        </ul>
        <div>
          <button class="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200">Book Now</button>
        </div>
    </nav>
  );
}

export default Navbar;