import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
      {/* Left — Big 404 */}
      <div className="flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 py-16 md:py-0">
        <p className="text-[12rem] md:text-[16rem] font-bold text-gray-200 leading-none select-none tracking-tighter">
          404
        </p>
      </div>

      {/* Right — Message */}
      <div className="flex flex-col justify-center gap-5 px-10 sm:px-16 md:px-20 py-16 md:py-0">
        <span className="text-[14px] tracking-wider font-semibold uppercase text-gray-400">
          Page Not Found
        </span>

        <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight">
          Looks like you've taken a{" "}
          <em className="text-gray-400">wrong turn.</em>
        </h1>

        <div className="w-10 h-px bg-gray-200" />

        <p className="text-black leading-relaxed max-w-sm font-light">
          The page you're looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        <Link
          to="/"
          className="bg-gray-900 text-white text-[12px] font-medium tracking-[0.14em] uppercase px-7 py-3 w-fit transition-all ease-in-out duration-200"
        >
          Back to Home
        </Link>

        <p className="text-gray-600">
          Or browse our{" "}
          <Link
            to="/collection"
            className="text-gray-900 underline underline-offset-4 transition-colors"
          >
            latest collection
          </Link>{" "}
          instead.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
