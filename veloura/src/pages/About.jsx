import React from "react";
import NewsLetter from "../components/NewsLetter";

/* =============== 1. STATIC DATA (CORE VALUES) - USED TO DISPLAY BRAND PRINCIPLES =============== */
const values = [
  {
    number: "01",
    title: "Quality First",
    desc: "We source only the finest fabrics — Merino wool, organic cotton, and European linen — so every piece feels as good as it looks.",
  },
  {
    number: "02",
    title: "Timeless Design",
    desc: "Trends come and go. We design pieces that outlast the season — clean silhouettes and neutral palettes that work year after year.",
  },
  {
    number: "03",
    title: "Honest Pricing",
    desc: "No markups for the sake of it. You pay for the fabric, the craft, and the care — nothing else.",
  },
];

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 md:pt-10 md:pb-0 border-t border-gray-300">
      {/* =============== 2. SECTION TAG (INTRO LABEL) =============== */}
      <p className="text-[16px] font-semibold tracking-wider uppercase text-gray-400 mb-10">
        Our Story
      </p>

      {/* =============== 3. HERO SECTION (IMAGE + TEXT) - TWO COLUMN LAYOUT =============== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
        {/* ================= IMAGE ================= */}
        <img
          src="/images/about_img.png"
          alt="About Clothify"
          className="w-full aspect-square object-cover"
        />

        {/* ================= TEXT CONTENT ================= */}
        <div className="flex flex-col gap-5">
          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 leading-tight">
            Simple styles, <br /> made with{" "}
            <em className="text-gray-400">intention.</em>
          </h1>

          {/* DIVIDER */}
          <div className="w-10 h-px bg-gray-300" />

          {/* PARAGRAPH 1 */}
          <p className="text-gray-800 leading-relaxed">
            Veloura was born from a simple frustration — too many clothes, not
            enough quality. We set out to build a brand that respects both the
            person wearing it and the craft behind it.
          </p>

          {/* PARAGRAPH 2 */}
          <p className="text-gray-800 leading-relaxed">
            Every piece we design starts with a question: will this still feel
            right five years from now? If the answer is yes, we make it. If not,
            we go back to the drawing board.
          </p>
        </div>
      </div>

      {/* =============== 4. VALUES SECTION - LOOP THROUGH VALUES USING map() =============== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-gray-200 pt-16 mb-20">
        {values.map((value) => (
          <div key={value.number}>
            {/* VALUE NUMBER */}
            <p className="text-6xl font-medium text-[#e3e6ea] mb-6">
              {value.number}
            </p>

            {/* VALUE TITLE */}
            <p className="text-xl font-medium uppercase text-black mb-2">
              {value.title}
            </p>

            {/* VALUE DESCRIPTION */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {value.desc}
            </p>
          </div>
        ))}
      </div>

      {/* =============== 5. NEWSLETTER SECTION (REUSABLE COMPONENT) =============== */}
      <NewsLetter />
    </div>
  );
};

export default About;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS COMPONENT REPRESENTS THE ABOUT PAGE.

   2. MAIN SECTIONS:
      - INTRO TAG (OUR STORY)
      - HERO SECTION (IMAGE + BRAND STORY)
      - VALUES SECTION (CORE PRINCIPLES)
      - NEWSLETTER (REUSABLE COMPONENT)

   3. CORE LOGIC:
      - USES values ARRAY TO DYNAMICALLY RENDER CONTENT

   4. UI STRUCTURE:
      - RESPONSIVE GRID LAYOUT
      - CLEAN TYPOGRAPHY HIERARCHY
      - VISUAL SEPARATION USING BORDERS

   5. REUSABILITY:
      - NEWSLETTER COMPONENT ADDED FOR ENGAGEMENT

   6. IMPROVEMENT NOTES:
      - FIX DUPLICATE CLASS "text text-gray-800" → CLEANED
      - ADD IMAGE FALLBACK FOR SAFETY
      - CAN EXTRACT VALUES INTO CONSTANT FILE

========================================================= */
