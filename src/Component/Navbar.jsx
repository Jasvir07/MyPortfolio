import {
  FaUser,
  FaBriefcase,
  FaTools,
  FaFileAlt,
  FaGraduationCap,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import logo from "/Images/logo.png"; // Adjust the path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md fixed w-full top-0 z-50 border-b">
      <div className="flex justify-between items-center px-4 py-4 md:px-8">
        <div className="flex items-center">
          <img src={logo} alt="MyPortfolio Logo" className="h-10 mr-2" /> {/* Logo added here */}
          <div className="text-white text-2xl font-bold">MyPortfolio</div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Menu for larger screens */}
        <ul className="hidden md:flex md:space-x-8 text-white text-xl">
          <li className="flex items-center">
            <FaUser className="mr-2 text-2xl" />
            <a
              href="#about"
              className="block py-2 px-4 hover:text-green-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li className="flex items-center">
            <FaBriefcase className="mr-2 text-2xl" />
            <a
              href="#portfolio"
              className="block py-2 px-4 hover:text-green-500 transition duration-300"
            >
              Portfolio
            </a>
          </li>
          <li className="flex items-center">
            <FaTools className="mr-2 text-2xl" />
            <a
              href="#skills"
              className="block py-2 px-4 hover:text-green-500 transition duration-300"
            >
              Skills
            </a>
          </li>
          <li className="flex items-center">
            <FaFileAlt className="mr-2 text-2xl" />
            <a
              href="#resume"
              className="block py-2 px-4 hover:text-green-500 transition duration-300"
            >
              Resume
            </a>
          </li>
          <li className="flex items-center">
            <FaGraduationCap className="mr-2 text-2xl" />
            <a
              href="#education"
              className="block py-2 px-4 hover:text-green-500 transition duration-300"
            >
              Education
            </a>
          </li>
          <li className="flex items-center">
            <FaEnvelope className="mr-2 text-2xl" />
            <a
              href="#contact"
              className="block py-2 px-4 hover:text-green-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 bg-black text-white text-xl py-6">
          <li className="flex items-center">
            <FaUser className="mr-2 text-2xl" />
            <a
              href="#about"
              onClick={() => setIsOpen(false)} 
              className="block py-2 px-4 hover:text-green-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li className="flex items-center">
            <FaBriefcase className="mr-2 text-2xl" />
            <a
              href="#portfolio"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4 hover:text-green-500 transition duration-300"
            >
              Portfolio
            </a>
          </li>
          <li className="flex items-center">
            <FaTools className="mr-2 text-2xl" />
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4 hover:text-green-500 transition duration-300"
            >
              Skills
            </a>
          </li>
          <li className="flex items-center">
            <FaFileAlt className="mr-2 text-2xl" />
            <a
              href="#resume"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4 hover:text-green-500 transition duration-300"
            >
              Resume
            </a>
          </li>
          <li className="flex items-center">
            <FaGraduationCap className="mr-2 text-2xl" />
            <a
              href="#education"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4 hover:text-green-500 transition duration-300"
            >
              Education
            </a>
          </li>
          <li className="flex items-center">
            <FaEnvelope className="mr-2 text-2xl" />
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4 hover:text-green-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
