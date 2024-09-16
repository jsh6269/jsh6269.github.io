import NotionPage from "../components/NotionPage";
import Comment from "../components/Comment";

const PostPage = () => {
  return (
    <div className="w-screen sm:w-[1000px] sm:ml-[5px] sm:pl-[30px] sm:mt-[30px] sm:mb-[50px] pt-[4px] sm:pt-[25px] sm:pr-[50px] bg-gray-50">
      <NotionPage />
      <hr className="my-8 border-t-2 border-gray-200" />
      <Comment />
    </div>
  );
};

export default PostPage;
