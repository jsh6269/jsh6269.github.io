import { useEffect, useRef } from "react";
import NotionPage from "../components/NotionPage";

const Comment = () => {
  const commentsEl = useRef(null);

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "jsh6269/jsh6269.github.io");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("crossorigin", "anonymous");
    commentsEl.current?.appendChild(scriptEl);
  }, []);

  return (
    <div className="ml-2 mr-2 sm:mr-0 mb-6">
      <div ref={commentsEl} />
    </div>
  );
};

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
