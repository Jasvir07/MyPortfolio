import img1 from "/Images/contactMe.jpg";
import { FaEnvelope, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75 z-0"></div>
      <div className="relative z-10 w-full h-full p-4 sm:p-8 flex items-center justify-center">
        <div className="text-white text-center w-full sm:w-8/12 md:w-6/12  mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">CONTACT ME</h1>
          <p className="text-base sm:text-lg mb-6">Have a project to discuss?</p>
          <div className="w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 sm:p-4 mb-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 sm:p-4 mb-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 sm:p-4 mb-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 sm:p-4 mb-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
            ></textarea>
            <button className="w-1/2 md:w-1/4 px-8 py-3 sm:py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-200">
              SEND MESSAGE
            </button>
          </div>
          <div className="flex justify-center mt-10 sm:mt-20 space-x-6 sm:space-x-10">
            <a
              href="#"
              className="text-white text-3xl sm:text-4xl hover:text-green-500 transition duration-200"
            >
              <FaEnvelope />
            </a>
            <a
              href="#"
              className="text-white text-3xl sm:text-4xl hover:text-green-500 transition duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-white text-3xl sm:text-4xl hover:text-green-500 transition duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-white text-3xl sm:text-4xl hover:text-green-500 transition duration-200"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="mt-6 sm:mt-8 text-lg sm:text-2xl">Written & Coded by Jasvir Singh</p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
