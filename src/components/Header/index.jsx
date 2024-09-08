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
      <h1 className="text-[#CCCCFF] text-6xl font-medium">다시금의 블로그</h1>
      <h2 className="text-[#CCCCFF] text-3xl">#상상력이 부족해</h2>

      <nav>
        <ol className="flex space-x-4">
          <Link to="/">
            <li className="text-[#FFFFFF]">Home</li>
          </Link>
          <li className="text-[#FFFFFF]">
            <a href="https://github.com/jsh6269">GitHub</a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Header;
