import React from "react";

const Title = ({ text1, text2 }) => {
  /* =============== 1. PROPS
     - text1: FIRST PART OF TITLE (LIGHT STYLE)
     - text2: SECOND PART OF TITLE (HIGHLIGHTED STYLE)
  =============== */

  return (
    /* =============== 2. TITLE CONTAINER =============== */
    <div className="inline-flex mb-4">
      {/* =============== 3. TITLE TEXT
          - COMBINES text1 + text2
          - text2 IS VISUALLY HIGHLIGHTED
      =============== */}
      <p className="text-gray-500">
        {text1} <span className="text-black font-semibold">{text2}</span>
      </p>
    </div>
  );
};

export default Title;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS COMPONENT DISPLAYS A REUSABLE SECTION TITLE.

   2. CORE FUNCTIONALITY:
      - SPLITS TITLE INTO TWO PARTS:
        a) text1 → NORMAL STYLE
        b) text2 → HIGHLIGHTED STYLE

   3. BENEFITS:
      - REUSABLE ACROSS MULTIPLE SECTIONS
      - CONSISTENT DESIGN
      - CLEAN AND SIMPLE API (PROPS)

   4. UI STRUCTURE:
      - INLINE FLEX CONTAINER
      - SINGLE TEXT ELEMENT WITH STYLED SPAN

   5. IMPROVEMENT NOTE:
      - CAN ADD OPTIONAL CLASSNAME PROP FOR CUSTOM STYLING

========================================================= */
