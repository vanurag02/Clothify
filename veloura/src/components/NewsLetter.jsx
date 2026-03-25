import React from "react";

const NewsLetter = () => {
  /* =============== 1. FORM SUBMIT HANDLER - PREVENTS DEFAULT PAGE RELOAD =============== */
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center mt-10">
      {/* =============== 2. HEADER CONTENT (TITLE + DESCRIPTION) =============== */}
      <p className="text-2xl font-semibold text-gray-800">
        Subscribe now and enjoy 20% off your first order
      </p>

      <p className="text-gray-600 my-3">
        Be the first to know about new collections and discounts.
      </p>

      {/* =============== 3. NEWSLETTER FORM - EMAIL INPUT AND SUBMIT BUTTON =============== */}
      <form
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-12"
        onSubmit={onSubmitHandler}
      >
        {/* EMAIL INPUT FIELD */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 p-2.5 outline-none border border-gray-200 focus-within:border-gray-800 transition-all duration-200"
          required
        />

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="bg-black text-white text-[12px] font-medium tracking-[0.14em] uppercase px-6 py-3 cursor-pointer transition-all duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS COMPONENT DISPLAYS A NEWSLETTER SUBSCRIPTION FORM.

   2. CORE LOGIC:
      - HANDLES FORM SUBMISSION USING onSubmitHandler()
      - PREVENTS PAGE RELOAD USING event.preventDefault()

   3. CURRENT BEHAVIOR:
      - FORM DOES NOT SEND DATA (NO API INTEGRATION YET)

   4. UI STRUCTURE:
      - TITLE + DESCRIPTION
      - EMAIL INPUT FIELD
      - SUBMIT BUTTON

   5. UX FEATURES:
      - REQUIRED EMAIL FIELD VALIDATION
      - RESPONSIVE FORM WIDTH

   6. FUTURE IMPROVEMENTS:
      - ADD API CALL TO STORE EMAIL
      - SHOW SUCCESS / ERROR MESSAGE
      - CLEAR INPUT AFTER SUBMISSION

========================================================= */
