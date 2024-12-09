import React from "react";
import { assets } from "../assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 max-w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.agenLogo} alt="" />
          <p className="text-gray-400 mt-4">
            AgenShark is a multinational startup agency. we guide startups from
            concept to market leadership.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2  text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Support</h3>
          <ul className="flex flex-col gap-2  text-gray-400">
            <a href="#Header" className="hover:text-white">
              Team
            </a>
            <a href="#About" className="hover:text-white">
              Pricing Plan
            </a>
            <a href="#Contact" className="hover:text-white">
              FAQ's
            </a>
            <a href="#" className="hover:text-white">
              Contact Us
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our Newsletter
          </h3>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-green-800 text-white">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 mt-4 max-w-80">
            We will send you weekly updates for better Product management.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2024 © Ofosh. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;