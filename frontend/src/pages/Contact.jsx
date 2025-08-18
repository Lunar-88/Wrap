
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MyMap from '../components/MyMap';

function Contact() {
  return (
    <div className="min-h-screen pt-10">
      {/* Contact + Socials */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center max-w-6xl mx-auto px-4 md:px-20 pt-10">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col pt-10 pb-5 text-center md:text-left">
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <ul className="flex flex-col space-y-4">
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <FontAwesomeIcon icon={faPhone} className="text-lg" />
              <a href="tel:+254791011163" className="hover:text-green-400 transition">
                +254791011163
              </a>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <FontAwesomeIcon icon={faWhatsapp} className="text-[#25D366] text-lg" />
              <a
                href="http://wa.me/message/F4J2J7A5B66GB1"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
              <a href="mailto:laserwrapske@gmail.com">laserwrapske@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1 flex flex-col items-center md:items-start pt-10">
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1HFPdp7c38/?mibextid=wwXIfr"
              className="text-sky-500 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://www.instagram.com/laser_wrapske?igsh=MXZoa2RxbWkzNWlraA=="
              className="text-[#FF69B4] hover:text-[#FFC0CB]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://x.com/customz2676035?s=21"
              className="text-sky-400 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://www.tiktok.com/@laserwrapske?_t=ZM-8x39IOsvLx2&_r=1"
              className="text-black hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </a>
            <a
              href="https://youtube.com/@laserwrapske254?si=9JTJNKazyrZ0JJq6"
              className="text-[#FF0000] hover:text-red-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full max-w-6xl mx-auto mt-6 px-4 md:px-20">
        <MyMap />
      </div>
    </div>
  );
}

export default Contact;
