import React from "react";
import "./TrustedBy.css";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
  "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
  "https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png",
  "https://logolook.net/wp-content/uploads/2023/04/PwC-Symbol.png",
  "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/DeloitteNewSmall.png/220px-DeloitteNewSmall.png"
  // "https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png",
];

const TrustedBy = () => {
  return (
    <div className="logo-slider py-10">
      <h2 className="text-center text-2xl font-black text-gray-500 mb-8">
        Trusted By
      </h2>
      <div className="logo_animation w-full">
        {logos.map((logo, index) => (
          <img
            key={index}
            className="logo-slider__logo"
            src={logo}
            alt={`Logo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
