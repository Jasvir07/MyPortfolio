import { useState } from "react";
import img1 from "/Images/contactMe.jpg";
import { FaEnvelope, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { toastConfig } from "../utility/toastConfig";

const ContactMe = () => {
  const [formData, setFormData] = useState({});
  const inputFields = [
    { type: "text", placeholder: "Your Name", name: "name" },
    { type: "email", placeholder: "Your Email", name: "email" },
    { type: "text", placeholder: "Subject", name: "subject" },
  ];

  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function clickHandler() {
    const api = async () => {
      try {
        const response = await axios.post(
          "https://myportfolio-1-0azb.onrender.com/mail",
          formData
        );
        const data = await response.data;
        toast.success("Mail Sent Successfully",toastConfig)
      } catch (e) {
        toast.error("Error while sending the mail",toastConfig)
      }
    };
    api();
  }

  const socialLinks = [
    { icon: <FaEnvelope />, href: "" },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/_jass_bhatoa_/?igsh=MTBvNW0yMzVleXBzNg%3D%3D",
    },
    { icon: <FaGithub />, href: "https://github.com/Jasvir07" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/jasvir07/" },
  ];

  return (
    <div
      className="relative flex items-center justify-center  bg-cover bg-center "
      id="contact"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75 z-0"></div>
      <div className="relative z-10 w-full h-full p-4 sm:p-8 flex items-center justify-center">
        <div className="text-white text-center w-full sm:w-8/12 md:w-6/12 mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">CONTACT ME</h1>
          <p className="text-base sm:text-lg mb-6">
            Have a project to discuss?
            <span className="block w-[8%] h-1 mx-auto bg-green-500 mt-2" />
          </p>
          <div className="w-full">
            {inputFields.map((field, index) => (
              <input
                key={index}
                name={field.name}
                onChange={changeHandler}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full p-3 sm:p-4 mb-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
            <textarea
              name="message"
              onChange={changeHandler}
              placeholder="Your Message"
              className="w-full p-3 sm:p-4 mb-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
            ></textarea>
            <button
              onClick={clickHandler}
              className="w-1/2 md:w-1/4 px-8 py-3 sm:py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-200"
            >
              SEND MESSAGE
            </button>
          </div>
          <div className="flex justify-center mt-10 sm:mt-20 space-x-6 sm:space-x-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white text-3xl sm:text-4xl hover:text-green-500 transition duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="mt-6 sm:mt-8 text-lg sm:text-2xl">
            Written & Coded by Jasvir Singh
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
