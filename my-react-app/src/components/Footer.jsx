import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp, faFacebook,faInstagram,faTwitter,faTiktok, faYoutube,} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="text-white">
  <div className="container mx-auto flex flex-col md:flex-row bg-[#4A4A4A] pt-6 pb-10 px-4 text-center md:text-left gap-6 md:gap-12">
    
    {/* Logo */}
    <div className="flex-1 mb-6 md:mb-0">
      <img src="logos.png" alt="Logo" className="w-24 md:w-28 mx-auto object-contain scale-[3]" />
    </div>

    {/* Contact Us */}
    <div className="flex-1 flex flex-col items-center md:items-start mb-6 md:mb-0">
      <h2 className="text-lg font-bold mb-2">Contact Us</h2>
      <ul className="flex flex-col space-y-3">
        <li className="flex items-center gap-3 justify-center md:justify-start">
          <FontAwesomeIcon icon={faPhone} className="text-lg" />
          <a href="tel:+254791011163" className="hover:text-green-400 transition">+254791011163</a>
        </li>
        <li className="flex items-center gap-3 justify-center md:justify-start">
          <FontAwesomeIcon icon={faWhatsapp} className="text-[#25D366] text-lg" />
          <a href="http://wa.me/message/F4J2J7A5B66GB1" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </li>
        <li className="flex items-center gap-3 justify-center md:justify-start">
          <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
          <a href="mailto:laserwrapske@gmail.com">laserwrapske@gmail.com</a>
        </li>
      </ul>
    </div>

    {/* Working Hours */}
    <div className="flex-1 mb-6 md:mb-0">
      <h2 className="text-lg font-bold mb-2">Working Hours</h2>
      <p>Monday - Saturday</p>
      <p>8:00 AM - 6:00 PM</p>
    </div>

    {/* Location */}
    <div className="flex-1 mb-6 md:mb-0">
      <h2 className="text-lg font-bold mb-2">Location</h2>
      <p><FontAwesomeIcon icon={faLocationDot} className="mr-2" /> Mirema Drive, Nairobi</p>
    </div>

    {/* Social Links */}
    <div className="flex-1">
      <h2 className="text-lg font-bold mb-2">Follow Us</h2>
      <div className="flex justify-center md:justify-start gap-4">
        <a href="https://www.facebook.com/share/1HFPdp7c38/?mibextid=wwXIfr" className="text-sky-500 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="https://www.instagram.com/laser_wrapske?igsh=MXZoa2RxbWkzNWlraA==" className="text-[#FF69B4] hover:text-[#FFC0CB]" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="https://x.com/customz2676035?s=21" className="text-sky-400 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href="https://www.tiktok.com/@laserwrapske?_t=ZM-8x39IOsvLx2&_r=1" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} size="lg" />
        </a>
        <a href="https://youtube.com/@laserwrapske254?si=9JTJNKazyrZ0JJq6" className="text-[#FF0000] hover:text-red-700" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
      </div>
    </div>
  </div>

  {/* Footer Bottom Bar */}
  <div className="bg-[#333333] flex flex-col md:flex-row items-center justify-center gap-4 py-3 px-4 text-sm text-center">
    <p>© 2023 Laser Wraps Ke. All rights reserved.</p>
    <p>
      Developed by{' '}
      <a href="https://www.linkedin.com/in/felix-kemboi-33b757369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-sky-500 font-bold">
        Felix
      </a>
    </p>
  </div>
</footer>

  );
}

export default Footer;     