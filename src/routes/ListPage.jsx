import postTree from "../tree.json";
import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const ListPage = () => {
  const { category } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [posts, setPosts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 18;

  useEffect(() => {
    const fetchData = () => {
      const categoryPosts = postTree[category] || [];
      const sortedPosts = categoryPosts.sort((a, b) => b.id - a.id);
      setPosts(sortedPosts);
      setCurrentPage(1);
    };
    fetchData();
  }, [category]);

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));

    const total = Math.ceil(posts.length / postsPerPage);
    setTotalPages(total);
  }, [posts, currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
  };

  return (
    <div className="px-6 py-3">
      <h2 className="text-2xl font-semibold mt-8 mb-5 mx-1">{category}</h2>
      <table className="w-[950px] mb-10 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 w-[100px]">No</th>
            <th className="border px-4 py-2 w-[550px]">제목</th>
            <th className="border px-4 py-2 w-[200px]">작성일</th>
            <th className="border px-4 py-2 w-[100px]">조회수</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr
              key={post.id}
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
            >
              <td className="border px-4 py-2">{post.id}</td>
              <td className="border px-4 py-2">
                <Link to={`/post/${category}/${post.id}`}>{post.title}</Link>
              </td>
              <td className="border px-4 py-2">{post.date}</td>
              <td className="border px-4 py-2">0</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-2 px-4 py-2 border rounded ${
              page === currentPage
                ? "bg-gray-400 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListPage;
