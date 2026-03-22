import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { number: "200+", label: "Styles Available" },
  { number: "36H", label: "Express Dispatch" },
  { number: "12K+", label: "Happy Customers" },
];

const Hero = () => {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 min-h-105">
      {/* Left — Text */}
      <div className="flex flex-col justify-center gap-6 px-8 sm:px-16 md:px-20 py-16">
        <span className="text-[14px] tracking-wider uppercase text-gray-500 font-medium">
          New Collection — 2026
        </span>

        <h1 className="text-5xl sm:text-6xl font-normal text-black leading-tight">
          Style that speaks <em className="text-gray-500">before</em> you do.
        </h1>

        <p className="text-[18px] text-sm text-gray-600 leading-relaxed max-w-sm">
          Crafted for those who value quality over quantity — from sharp
          everyday essentials to refined statement pieces.
        </p>

        <Link
          to="/collection"
          className="bg-gray-950 text-white hover:bg-black text-[12px] font-medium tracking-[0.14em] uppercase px-7 py-3 w-fit transition-all ease-in-out duration-200"
        >
          Shop Now
        </Link>
      </div>

      {/* Right — Stats */}
      <div className="flex flex-col justify-center md:border-t-0 md:border-l border-gray-300 px-8 sm:px-16 md:px-20 py-12 md:py-0">
        {stats.map((stat, i) => (
          <div key={i} className="py-8 first:pt-0 last:pb-0">
            <p className="text-5xl text-gray-900 leading-none">{stat.number}</p>
            <p className="text-[14px] tracking-wide uppercase text-gray-400 font-medium mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
