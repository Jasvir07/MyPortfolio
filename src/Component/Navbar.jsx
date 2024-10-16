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
import logo from "/Images/logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { id: 1, item: "About", href: "#about", icon: <FaUser className="mr-2 text-2xl" /> },
    { id: 2, item: "Portfolio", href: "#portfolio", icon: <FaBriefcase className="mr-2 text-2xl" /> },
    { id: 3, item: "Skills", href: "#skills", icon: <FaTools className="mr-2 text-2xl" /> },
    { id: 4, item: "Resume", href: "#resume", icon: <FaFileAlt className="mr-2 text-2xl" /> },
    { id: 5, item: "Education", href: "#education", icon: <FaGraduationCap className="mr-2 text-2xl" /> },
    { id: 6, item: "Contact", href: "#contact", icon: <FaEnvelope className="mr-2 text-2xl" /> },
  ];

  return (
    <nav className="bg-black shadow-md fixed w-full top-0 z-50 border-b">
      <div className="flex justify-between items-center px-4 py-4 md:px-8">
        <div className="flex items-center">
          <img src={logo} alt="MyPortfolio Logo" className="h-10 mr-2" />
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
          {data.map((navItem) => (
            <li key={navItem.id} className="flex items-center">
              {navItem.icon}
              <a
                href={navItem.href}
                className="block py-2 px-4 hover:text-green-500 transition duration-300"
              >
                {navItem.item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 bg-black text-white text-xl py-6">
          {data.map((navItem) => (
            <li key={navItem.id} className="flex items-center">
              {navItem.icon}
              <a
                href={navItem.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 hover:text-green-500 transition duration-300"
              >
                {navItem.item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
