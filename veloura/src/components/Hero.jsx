import React from "react";
import { Link } from "react-router-dom";

/* =============== 1. STATIC DATA (HERO STATS) - USED TO DISPLAY KEY BUSINESS METRICS =============== */
const stats = [
  { number: "200+", label: "Styles Available" },
  { number: "36H", label: "Express Dispatch" },
  { number: "12K+", label: "Happy Customers" },
];

const Hero = () => {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 min-h-105">
      {/* =============== 2. LEFT SECTION (TEXT CONTENT + CTA) =============== */}
      <div className="flex flex-col justify-center gap-6 px-8 sm:px-16 md:px-20 py-16">
        {/* TAGLINE */}
        <span className="text-[14px] tracking-wider uppercase text-gray-500 font-medium">
          New Collection — 2026
        </span>

        {/* MAIN HEADING */}
        <h1 className="text-5xl sm:text-6xl font-medium text-black leading-tight">
          Style that speaks <em className="text-gray-500">before</em> you do.
        </h1>

        {/* DESCRIPTION */}
        <p className="text-[18px] text-gray-600 leading-relaxed max-w-sm">
          Crafted for those who value quality over quantity — from sharp
          everyday essentials to refined statement pieces.
        </p>

        {/* CALL TO ACTION BUTTON */}
        <Link
          to="/collection"
          className="bg-gray-950 text-white hover:bg-black text-[12px] font-medium tracking-[0.14em] uppercase px-7 py-3 w-fit transition-all duration-200"
        >
          Shop Now
        </Link>
      </div>

      {/* =============== 3. RIGHT SECTION (STATS DISPLAY) - LOOP THROUGH stats ARRAY USING map() =============== */}
      <div className="flex flex-col justify-center md:border-t-0 md:border-l border-gray-300 px-8 sm:px-16 md:px-20 py-12 md:py-0">
        {stats.map((stat, index) => (
          <div key={index} className="py-8 first:pt-0 last:pb-0">
            {/* STAT NUMBER */}
            <p className="text-5xl font-medium text-gray-900 leading-none">
              {stat.number}
            </p>

            {/* STAT LABEL */}
            <p className="text-[16px] tracking-wide uppercase text-gray-500 font-medium mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS COMPONENT REPRESENTS THE HERO SECTION OF THE HOME PAGE.

   2. IT IS DIVIDED INTO TWO PARTS:
      - LEFT: TEXT CONTENT (TAGLINE, HEADING, DESCRIPTION, CTA)
      - RIGHT: BUSINESS STATS

   3. CORE LOGIC:
      - USES stats ARRAY TO DYNAMICALLY RENDER STATS USING map()

   4. UI STRUCTURE:
      - SINGLE COLUMN ON MOBILE
      - TWO COLUMNS ON MEDIUM+ SCREENS

   5. UX FEATURES:
      - CLEAR CALL TO ACTION (SHOP NOW)
      - VISUAL HIERARCHY USING TYPOGRAPHY
      - STATS FOR TRUST BUILDING

========================================================= */
