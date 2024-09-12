import React from "react";

const Header = () => {
  return (
    <div className="w-screen sm:w-[1400px] h-[20px] sm:h-[40px] mt-[12px] sm:mt-[18px] mb-[18px] sm:mb-[12px] relative flex justify-between">
      <p className="ml-2 sm:ml-0 text-sm sm:text-base text-left">
        ©2024 Jang, Suhan (@jsh6269)
      </p>
      <p className="mr-2 sm:ml-0 text-xs sm:text-base text-right mt-[3px] sm:mt-0">
        Hosted on GitHub Pages®
      </p>
    </div>
  );
};

export default Header;
