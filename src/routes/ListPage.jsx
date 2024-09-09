import { useParams } from "react-router-dom";
import postTree from "../tree.json";
import React from "react";
import { Link } from "react-router-dom";

const ListPage = () => {
  const { category } = useParams();
  const posts = postTree[category] || [];
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

  return (
    <div>
      <h2 className="text-2xl font-semibold mt-8 mb-5 mx-1">{category}</h2>
      <table className="w-[1000px] mb-14 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 w-[110px]">No</th>
            <th className="border px-4 py-2 w-[550px]">제목</th>
            {/* <th className="border px-4 py-2">글쓴이</th> */}
            <th className="border px-4 py-2 w-[240px]">작성일</th>
            <th className="border px-4 py-2 w-[100px]">조회수</th>
          </tr>
        </thead>
        <tbody>
          {sortedPosts.map((post) => (
            <tr
              key={post.id}
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
            >
              <td className="border px-4 py-2">{post.id}</td>
              <td className="border px-4 py-2">
                <Link to={`/post/${category}/${post.id}`}>{post.title}</Link>
              </td>
              {/* <td className="border px-4 py-2">{post.author}</td> */}
              <td className="border px-4 py-2">{post.date}</td>
              <td className="border px-4 py-2">0</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPage;
