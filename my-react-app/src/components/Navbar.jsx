import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="w-full bg-white mx-auto fixed top-0 z-50">
    <nav className="flex bg-white aria-label w-full justify-between items-center px-10 py-10 shadow-md mx-auto">
       <div className="pl-10">
         <img src="logos.png" alt="logo" className="h-10 w-10 scale-[8] ml-10"/>
       </div>
       
       <ul className="flex space-x-12 gap-x-14 font-semibold text-lg w-100 justify-center items-center">
          <li><Link to="/" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">Home</Link></li>
          <li><Link to="/Ourservices" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">Services</Link></li>
          <li><Link to="/Media" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">Media</Link></li>
          <li><Link to="/FAQs" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">FAQs</Link></li>
          <li><Link to="/Contact" className="hover:text-white hover:bg-black px-4 py-2 rounded-md">Contact</Link></li>
        </ul>
       
        <div className="bg-black hover:bg-slate-700 text-white px-4 py-2 rounded-md ">
          <button className="font-semibold ">Book Now</button>
        </div>
    </nav>
    </div>
  );
}

export default Navbar;