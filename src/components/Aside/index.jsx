import React from "react";
import bgTile from "../../assets/images/bg.gif";
import profile from "../../assets/images/profile.jpg";
import postTree from "../../tree.json";
import { Link } from "react-router-dom";

const Aside = () => {
  const background = {
    backgroundImage: `url(${bgTile})`,
  };
  const tabs = Object.keys(postTree);

  return (
    <div className="w-[290px] m-[30px] relative">
      <section className="mb-[20px]" style={background}>
        <div className="flex flex-col items-center p-[20px]">
          <img src={profile} alt="profile" className="w-[200px]" />
        </div>
        <div className="ml-[48px] pb-[40px]">
          <h1 className="text-lg mb-[5px]">장수한 (jsh6269)</h1>
          <p>
            평범한 컴공 학부생
            <br />
            종강만 바라보고 산다.
          </p>
        </div>
      </section>
      <section style={background}>
        <ol className="py-[20px]">
          {tabs.map((key) => (
            <Link to={`list/${key}`}>
              <li className="ml-[40px] py-[2px]" key={key}>
                {key}
              </li>
            </Link>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Aside;
