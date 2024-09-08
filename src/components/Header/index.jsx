import React from "react";
import title from "../../assets/images/title_pic.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const background = {
    backgroundImage: `url(${title})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className="w-[1400px] h-[242px] mt-[12px] mb-[20px] relative"
      style={background}
    >
      <h1 className="text-[#CCCCFF] text-5xl font-medium mt-[50px] ml-[40px]">
        장수한의 블로그
      </h1>
      <h2 className="text-[#CCCCFF] text-2xl mt-[12px] mb-[35px] ml-[40px]">
        Jang, Suhan
      </h2>

      <nav>
        <ol className="flex space-x-6">
          <Link to="/">
            <li className="text-[#FFFFFF] ml-[40px] text-xl">Home</li>
          </Link>
          <li className="text-[#FFFFFF] ml-[40px] text-xl">
            <a href="https://github.com/jsh6269">GitHub</a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Header;
