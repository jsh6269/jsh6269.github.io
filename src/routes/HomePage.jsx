import { Link } from "react-router-dom";
// 홈화면
const HomePage = () => {
  return (
    <div className="w-[1024px]">
      <Link to="/post/IT/1">
        <p className="text-4xl mt-10">sample post</p>
      </Link>
    </div>
  );
};

export default HomePage;
