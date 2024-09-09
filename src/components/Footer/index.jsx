import React from "react";
import title from "../../assets/images/title_pic.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-[1400px] h-[40px] mt-[18px] mb-[20px] relative text-xl">
      <p className="mr-[880px] inline-block">©2024 Jang, Suhan (@jsh6269)</p>
      <p className="inline-block">Hosted on GitHub Pages®</p>
    </div>
  );
};

export default Header;
