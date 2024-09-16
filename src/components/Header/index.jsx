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
      className="w-screen sm:w-[1400px] h-[228px] sm:h-[242px] sm:mt-[12px] sm:mb-[20px] relative"
      style={background}
    >
      <h1 className="text-[#CCCCFF] text-[42px] sm:text-5xl font-medium mt-[32px] sm:mt-[50px] ml-[30px] sm:ml-[45px]">
        장수한의 블로그
      </h1>
      <h2 className="text-[#CCCCFF] text-2xl sm:mt-[12px] mb-[28px] sm:mb-[35px] ml-[32px] sm:ml-[50px]">
        Jang, Suhan
      </h2>

      <nav>
        <ol className="flex space-x-6">
          <li className="text-[#FFFFFF] ml-[32px] sm:ml-[50px] text-xl">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              Home
            </Link>
          </li>
          <li className="text-[#FFFFFF] text-xl">
            <a href="https://github.com/jsh6269">GitHub</a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Header;
