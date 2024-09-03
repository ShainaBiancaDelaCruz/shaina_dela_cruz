// src/Components/Contact/Contact.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { FaEnvelope, FaPhone, FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdOutlineContactPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!firstName || !lastName || !email || !message || !inquiryType) {
      alert('Please fill out all fields');
      return;
    }

    // Prepare email data for Shaina
    const templateParams = {
      firstName,
      lastName,
      email,
      inquiryType,
      message,
      to_email: 'shainabiancaf.delacruz@gmail.com', // Shaina's email
    };

    // Prepare email data for auto-reply
    const autoReplyParams = {
      firstName,
      email, // The user's email (where the auto-reply will be sent)
    };

    try {
      // Send the main email to Shaina
      await emailjs.send(
        'service_x96h0kd',    // Replace with your EmailJS service ID
        'template_d8cy2ho',   // Replace with your EmailJS template ID for Shaina's email
        templateParams,
        'iX0_5xY0c-UCH3O5p'     // Replace with your EmailJS public key (user ID)
      );

      // Send auto-reply email to the user
      await emailjs.send(
        'service_x96h0kd',             // Replace with your EmailJS service ID
        'template_n5tud2m', // Replace with your EmailJS template ID for auto-reply
        autoReplyParams,
        'iX0_5xY0c-UCH3O5p'              // Replace with your EmailJS public key (user ID)
      );

      console.log('Emails sent successfully');
      alert('Message sent successfully!');

      // Reset form fields after successful submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setInquiryType('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="lg:py-16 md:mx-[15%] relative z-10" id="contact">
      <div className="text-center text-white">
        <h1 className="text-3xl lg:text-5xl text-blue-gray mb-4">Let's Work Together</h1>
        <p className="font-normal text-lg lg:mb-5 max-w-3xl mx-auto text-center">
          Send an inquiry or message, I'll get back to you promptly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          <div className="text-white p-8 shadow-md rounded-md mb-8 lg:mb-0 flex flex-col">
            <h2 className="text-2xl font-semibold">Contact Information</h2>

            <div className="mt-8 ml-0">
              <MdOutlineContactPhone className="w-full md:max-h-[200px] sm:max-h-[350px] h-auto" alt="Contact Icon" />
            </div>

            <ul className="text-white-700 space-y-2 flex flex-col items-center">
              <li className="flex items-center">
                <FaEnvelope className="w-6 h-6 mr-2" aria-label="Email" />
                <span>shainabiancaf.delacruz@gmail.com</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-6 h-6 mr-2" aria-label="Phone" />
                <span>09128280311</span>
              </li>
              <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/shainadelacruz" className="text-4xl hover:text-[40px]" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/shainadelacruz" className="text-4xl hover:text-[40px]" aria-label="Facebook">
                  <FaFacebookSquare />
                </a>
                <a href="https://github.com/shainadelacruz" className="text-4xl hover:text-[40px]" aria-label="GitHub">
                  <FaGithubSquare />
                </a>
              </div>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="p-8 shadow-md rounded-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="name@email.com"
                className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <select
                className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
              >
                <option value="" disabled>Select an option</option>
                <option value="General inquiry">General inquiry</option>
                <option value="Product Support">Product Support</option>
              </select>
            </div>
            <div className="mt-4">
              <textarea
                rows={6}
                placeholder="Message"
                className="w-full px-3 py-2 text-gray-700 border rounded-md resize-none focus:outline-none focus:border-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-yellow rounded-md hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black mt-4"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
