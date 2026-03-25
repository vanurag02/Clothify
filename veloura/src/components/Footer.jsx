import React from "react";

const Footer = () => {
  /* =============== 1. DYNAMIC VALUES - CURRENT YEAR FOR COPYRIGHT =============== */
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-40 text-sm text-gray-700 border-t border-gray-200">
      {/* =============== 2. MAIN FOOTER SECTION (3 COLUMN LAYOUT) =============== */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10">
        {/* =============== LEFT SECTION (LOGO + DESCRIPTION) =============== */}
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

        {/* =============== COMPANY LINKS =============== */}
        <div>
          <p className="text-[16px] font-medium mb-5 text-gray-900">COMPANY</p>

          <ul className="flex flex-col gap-2">
            <li className="font-medium hover:text-black cursor-pointer transition-all duration-200">
              Home
            </li>
            <li className="font-medium hover:text-black cursor-pointer transition-all duration-200">
              About Us
            </li>
            <li className="font-medium hover:text-black cursor-pointer transition-all duration-200">
              Delivery
            </li>
            <li className="font-medium hover:text-black cursor-pointer transition-all duration-200">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* =============== CONTACT SECTION =============== */}
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

      {/* =============== 3. BOTTOM FOOTER (COPYRIGHT SECTION) =============== */}
      <div className="border-t border-gray-200 pt-5 my-10 text-center font-medium text-gray-500">
        © {currentYear} Clothify. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS COMPONENT DISPLAYS THE WEBSITE FOOTER.
   2. IT IS DIVIDED INTO TWO MAIN PARTS:
      - MAIN FOOTER (LOGO, LINKS, CONTACT)
      - BOTTOM FOOTER (COPYRIGHT)

   3. CORE LOGIC:
      - USES currentYear TO DYNAMICALLY SHOW THE YEAR.

   4. UI STRUCTURE:
      - 3 COLUMN GRID ON LARGER SCREENS.
      - STACKED LAYOUT ON SMALL SCREENS.

   5. UX FEATURES:
      - HOVER EFFECTS ON LINKS.
      - CLEAN AND READABLE LAYOUT.

========================================================= */
