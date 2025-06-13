import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pjssesm", // 🔍 Replace with your Service ID
        "template_9qc7fu7", // 🔍 Replace with your Template ID
        form.current,
        "Hji22BW1PEy0SuOwu" // 🔍 Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your message has been sent!");
          // alert("Message sent successfully!");
          form.current.reset(); // Reset form after submission
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl border border-gray-200 p-8 flex flex-col md:flex-row gap-8">
        {/* Left Side - Info */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold text-green-600 font-serif">
            Get in Touch
          </h2>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Call Us:</h3>
            <p className="text-gray-500">+1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Location:</h3>
            <p className="text-gray-500">123, Green Street, Flavor Town</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Top Services:
            </h3>
            <ul className="list-disc list-inside text-gray-500 space-y-1">
              <li>Recipe Consultation</li>
              <li>Online Cooking Classes</li>
              <li>Personal Chef Booking</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="bg-green-400 text-gray-100 hover:bg-green-500 hover:text-white rounded-full p-3 transform hover:scale-110 transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-green-400 text-gray-100 hover:bg-green-500 hover:text-white rounded-full p-3 transform hover:scale-110 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-green-400 text-gray-100 hover:bg-green-500 hover:text-white rounded-full p-3 transform hover:scale-110 transition duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="bg-green-400 text-gray-100 hover:bg-green-500 hover:text-white rounded-full p-3 transform hover:scale-110 transition duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold text-green-600 font-serif">
            Contact Form
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="fullname">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your full name"
                id="fullname"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Write your message..."
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
