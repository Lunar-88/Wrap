
function Footer() {
  return (
    <footer className=" text-white">
        <div className="container pt-5 pb-4 flex mx-auto text-center bg-[#333333] text-white flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex-1">
                <img src="logos.png" alt="Logo" className="w-24 mx-auto scale-[3]" />
            </div>
            <div className="flex-1">
                <h2 className="flex justify-center text-lg font-semibold mb-2 underline">Contact Us</h2>
                <ul className="flex-col justify-center space-x-4">
                    <li>Phone</li>
                    <li>Email</li>
                    <li>Address</li>
                </ul>
            </div>
            <div className="flex-1">
                <h2 class="flex justify-center text-lg font-semibold mb-2 underline">Working hours</h2>
                <p class="flex justify-center space-x-4">Monday - Saturday</p>
            </div>
            <div className="flex-1">
                <h2 class="flex justify-center text-lg font-semibold mb-2 underline">Location</h2>
                <p></p>
            </div>
        </div>
        <div className=" bg-[#4A4A4A] flex flex-row items-center pt-3 pb-3 gap-60 justify-center">
            <a href="#" class="text-white hover:text-gray-400">Privacy Policy</a>
            <div className="flex justify-center space-x-4">
                <a href="#" className="text-white hover:text-gray-400">Facebook</a>
                <a href="#" className="text-white hover:text-gray-400">Twitter</a>
                <a href="#" className="text-white hover:text-gray-400">Instagram</a>
                <a href="#" className="text-white hover:text-gray-400">Tiktok</a>
            </div>
            <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
        </div>
        <div className="flex justify-center pt-3 pb-3 bg-[#a8a6a6]">
            <p className="text-sm">Website developed by Felix Kemboi</p>
        </div>
    </footer>
  );
}

export default Footer;