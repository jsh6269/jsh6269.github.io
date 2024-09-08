import React from "react";
import bgTile from "../../assets/images/bg.gif";
import profile from "../../assets/images/profile.png";
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
        <img src={profile} className="w-[200px]" />
        <h1>다시금 (once again)</h1>
        <p>
          "Life is short, we need python." 이 문구에 깊은 감명을 받아 Computer
          Engineering을 공부 하게 된 평범한 공대생입니다. 득도하는 날까지 앞으로
          전진!
        </p>
      </section>
      <section style={background}>
        <ol>
          {tabs.map((key) => (
            <Link to={`list/${key}`}>
              <li key={key}>{key}</li>
            </Link>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Aside;
