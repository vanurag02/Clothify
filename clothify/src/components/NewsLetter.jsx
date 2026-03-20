import React from "react";

const NewsLetter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-semibold text-gray-800">
        Subscribe now and enjoy 20% off your first order
      </p>
      <p className="text-gray-600 my-3">
        Be the first to know about new collections and discounts.
      </p>
      <form
        action=""
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-12"
        onSubmit={onSubmitHandler}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 p-2.5 outline-none border border-gray-200 focus-within:border-gray-800 transition-all ease-in-out duration-200"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-[12px] font-medium tracking-[0.14em] uppercase px-6 py-3 cursor-pointer w-fit transition-all ease-in-out duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
