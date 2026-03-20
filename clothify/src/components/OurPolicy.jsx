import React from "react";
import Title from "./Title";

const OurPolicy = () => {
  return (
    <>
      <div className="text-center text-3xl py-8">
        <Title text1={"OUR"} text2={"POLICIES"} />
        <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600">
          Clear and simple policies for a better shopping experience.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-around gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
        <div>
          <img
            src="/images/exchange_icon.png"
            className="w-12 m-auto mb-5"
            alt="Exchange Icon"
          />
          <p className="font-semibold">Easy Exchange</p>
          <p className="text-gray-500">Hassle free exchange within 7-days.</p>
        </div>
        <div>
          <img
            src="/images/quality_icon.png"
            className="w-12 m-auto mb-5"
            alt="Quality Icon"
          />
          <p className="font-semibold">Quality Assurance</p>
          <p className="text-gray-500">
            Premium quality products for our customers.
          </p>
        </div>
        <div>
          <img
            src="/images/support_icon.png"
            className="w-12 m-auto mb-5"
            alt="Support Icon"
          />
          <p className="font-semibold">Customer Support</p>
          <p className="text-gray-500">
            24/7 customer support at your service.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurPolicy;
