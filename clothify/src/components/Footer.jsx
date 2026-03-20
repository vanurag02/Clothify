import React from "react";

const Footer = () => {
  return (
    <div className="mt-40 text-sm text-gray-700">
      {/* Main Footer */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10">
        {/* Left Section */}
        <div>
          <img
            src="/images/logo.png"
            alt="Clothify Logo"
            className="mb-5 w-32"
          />
          <p className="w-full md:w-2/3">
            Discover stylish and comfortable fashion designed for everyday wear.
            We bring you quality products with a seamless shopping experience.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-[16px] font-medium mb-5 text-gray-900">COMPANY</p>
          <ul className="flex flex-col gap-2">
            <li className="font-medium hover:text-black cursor-pointer transition-all ease-in-out duration-200">
              Home
            </li>
            <li className="font-medium hover:text-black cursor-pointer transition-all ease-in-out duration-200">
              About Us
            </li>
            <li className="font-medium hover:text-black cursor-pointer transition-all ease-in-out duration-200">
              Delivery
            </li>
            <li className="font-medium hover:text-black cursor-pointer transition-all ease-in-out duration-200">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <p className="text-[16px] font-medium mb-5 text-gray-900">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-2">
            <li>+91 98765 43210</li>
            <li>contact@clothify.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 pt-5 my-10 text-center font-medium text-gray-500">
        © {new Date().getFullYear()} Clothify. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
