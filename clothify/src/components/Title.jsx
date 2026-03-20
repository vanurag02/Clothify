import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex mb-4">
      <p className="text-gray-500">
        {text1} <span className="text-black font-semibold">{text2}</span>
      </p>
    </div>
  );
};

export default Title;
