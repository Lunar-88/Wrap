
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className=" text-white">
        <div className="container pt-5 pb-4 flex mx-auto text-center bg-[#4A4A4A] text-white flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex-1">
                <img src="logos.png" alt="Logo" className="w-24 mx-auto scale-[3]" />
            </div>
            <div className="flex-1">
                <h2 className="flex justify-center text-lg font-bold mb-2">Contact Us</h2>
                <ul className=" list-none m-0 p-0 flex-col space-x-4">
                    <li>Call us.</li>
                    <li>Whatsapp</li>
                    <li>Email us.</li>
                </ul>
            </div>
            <div className="flex-1 mb-10">
                <h2 class="flex justify-center text-lg font-bold mb-2 ">Working hours</h2>
                <p class="flex justify-center space-x-4">Monday - Saturday</p>
            </div>
            <div className="flex-1 mb-12">
                <h2 class="flex justify-center text-lg font-bold mb-2 ">Location</h2>
                <p>Mirema Drive, Nairobi</p>
            </div>
        </div>
        <div className=" bg-[#333333] flex flex-row items-center pt-3 pb-3 gap-60 justify-center">
            <a href="#" class="text-white hover:text-gray-400">Privacy Policy</a>
            <div className="flex justify-center space-x-20">
                <div className="flex gap-4">
                   <a href="https://www.facebook.com/share/1HFPdp7c38/?mibextid=wwXIfr" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                </div>
                <div className="flex gap-4">
                   <a href="https://www.instagram.com/laser_wrapske?igsh=MXZoa2RxbWkzNWlraA==" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                </div>
                <div className="flex gap-4">
                   <a href="https://x.com/customz2676035?s=21" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                </div>
                <div className="flex gap-4">
                   <a href="https://www.tiktok.com/@laserwrapske?_t=ZM-8x39IOsvLx2&_r=1" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} size="lg" /></a>
                </div>
            </div>
            <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
        </div>
        <div className="flex justify-center pt-3 pb-3 bg-[#000000] text-white">
            <p className="text-base">Website developed by <a href="https://www.linkedin.com/in/felix-kemboi-33b757369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><bold className="underline text-blue-600">Felix Kemboi</bold></a></p>
        </div>
    </footer>
  );
}

export default Footer;