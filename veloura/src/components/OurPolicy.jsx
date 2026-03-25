import React from "react";
import Title from "./Title";

/* =============== 1. STATIC DATA (POLICY ITEMS) - USED TO AVOID REPETITION (DRY PRINCIPLE) =============== */
const policies = [
  {
    icon: "/images/exchange_icon.png",
    title: "Easy Exchange",
    description: "Hassle free exchange within 7-days.",
  },
  {
    icon: "/images/quality_icon.png",
    title: "Quality Assurance",
    description: "Premium quality products for our customers.",
  },
  {
    icon: "/images/support_icon.png",
    title: "Customer Support",
    description: "24/7 customer support at your service.",
  },
];

const OurPolicy = () => {
  return (
    <>
      {/* =============== 2. SECTION HEADER (TITLE + DESCRIPTION) =============== */}
      <div className="text-center text-3xl py-8">
        <Title text1={"OUR"} text2={"POLICIES"} />

        <p className="w-3/4 m-auto text-sm md:text-base text-gray-600">
          Clear and simple policies for a better shopping experience.
        </p>
      </div>

      {/* =============== 3. POLICY ITEMS SECTION - LOOP THROUGH policies ARRAY USING map() =============== */}
      <div className="flex flex-col sm:flex-row justify-around gap-12 text-center pt-4 pb-20 text-xs sm:text-sm md:text-base text-gray-700">
        {policies.map((policy, index) => (
          <div key={index}>
            {/* POLICY ICON */}
            <img
              src={policy.icon}
              className="w-12 m-auto mb-5"
              alt={policy.title}
            />

            {/* POLICY TITLE */}
            <p className="font-semibold">{policy.title}</p>

            {/* POLICY DESCRIPTION */}
            <p className="text-gray-500">{policy.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurPolicy;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS COMPONENT DISPLAYS STORE POLICIES.

   2. CORE LOGIC:
      - STORES POLICY DATA IN ARRAY (policies)
      - USES map() TO RENDER EACH POLICY ITEM

   3. BENEFITS OF CURRENT APPROACH:
      - AVOIDS CODE REPETITION (DRY)
      - EASY TO ADD / REMOVE POLICIES
      - CLEAN AND SCALABLE STRUCTURE

   4. UI STRUCTURE:
      - HEADER (TITLE + DESCRIPTION)
      - POLICY ITEMS (ICON + TITLE + DESCRIPTION)

   5. RESPONSIVENESS:
      - STACKED ON MOBILE
      - ROW LAYOUT ON LARGER SCREENS

   6. IMPROVEMENT NOTE:
      - USING index AS KEY (OK FOR STATIC DATA)
      - BETTER: ADD UNIQUE ID IF DATA BECOMES DYNAMIC

========================================================= */
