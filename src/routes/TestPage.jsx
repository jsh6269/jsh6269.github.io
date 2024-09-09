import React from "react";

const TestPage = () => {
  const posts = [
    {
      id: 10,
      title: "네이버 지도(v5) 임베드",
      author: "아임웹",
      date: "2019-12-17",
      likes: 0,
    },
    { id: 9, title: "제목", author: "아임웹", date: "2019-12-16", likes: 0 },
    {
      id: 8,
      title: "구글 지도 게시물에 임베드 하기",
      author: "아임웹",
      date: "2019-12-16",
      likes: 0,
    },
    {
      id: 7,
      title: "아이폰 7 플러스",
      author: "아임웹",
      date: "2018-05-14",
      likes: 0,
    },
    {
      id: 6,
      title: "분위기 최고네요~!",
      author: "아임웹",
      date: "2018-04-17",
      likes: 0,
    },
    {
      id: 5,
      title: "진짜로 갑니다~~",
      author: "아임웹",
      date: "2018-04-17",
      likes: 0,
    },
    {
      id: 4,
      title: "탭 메뉴 이미지",
      author: "아임웹",
      date: "2017-12-06",
      likes: 0,
    },
    {
      id: 3,
      title: "응원합니다!",
      author: "아임웹",
      date: "2017-11-20",
      likes: 0,
    },
    {
      id: 2,
      title: "이번엔 가즈아아아아아아아!",
      author: "아임웹",
      date: "2017-11-20",
      likes: 0,
    },
    {
      id: 1,
      title: "제목만 보여주기!",
      author: "아임웹",
      date: "2017-11-20",
      likes: 0,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mt-8 mb-5 mx-1">자유게시판</h2>
      <table className="w-[1000px] mb-14 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">제목</th>
            {/* <th className="border px-4 py-2">글쓴이</th> */}
            <th className="border px-4 py-2">작성시간</th>
            <th className="border px-4 py-2">조회수</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr
              key={post.id}
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
            >
              <td className="border px-4 py-2">{post.id}</td>
              <td className="border px-4 py-2">{post.title}</td>
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

export default TestPage;
