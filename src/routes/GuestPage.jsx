import { Link } from "react-router-dom";
import Comment from "../components/Comment";

const PostPage = () => {
  return (
    <div className="sm:px-6 py-3 w-screen sm:w-[1000px]">
      <h2 className="px-[8px] sm:px-0 text-2xl font-semibold mt-4 sm:mt-8 mb-2 mx-1">
        <Link to={`/guests`} onClick={() => window.scrollTo(0, 0)}>
          Guests
        </Link>
      </h2>
      <div className="ml-[-8px]">
        <Comment />
      </div>
    </div>
  );
};

export default PostPage;
