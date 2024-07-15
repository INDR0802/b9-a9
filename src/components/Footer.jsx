import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center py-10 bg-gray-800 rounded text-white">
        <div className="navbar-start flex items-center mb-[-15px] lg:mb-0 gap-2 justify-center ">
          <h1 className="text-3xl md:text-5xl">Dream Home</h1>
        </div>
        <p className="text-md">
          Join our forum to share thoughts, inspire others, and foster
          meaningful connections. Together, we grow stronger!
        </p>
        <nav>
          <div className="grid grid-flow-col gap-6">
            <a>
              <FaTwitter color="white" size={30} />
            </a>
            <a>
              <FaFacebook color="white" size={30} />
            </a>
            <a>
              <IoLogoYoutube color="white" size={30} />
            </a>
            <a>
              <FaLinkedin color="white" size={30} />
            </a>
            <a>
              <FaSquareInstagram color="white" size={30} />
            </a>
          </div>
        </nav>
        <aside>
          <p className="mt-5">2024, All Rights Reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
