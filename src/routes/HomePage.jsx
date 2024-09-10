import { Link } from "react-router-dom";
import data from "../tree.json";

// 홈화면
const HomePage = () => {
  return (
    <div className="bg-gray-100 flex items-start justify-center mt-[30px] mb-[50px] ml-[5px]">
      <div className="grid grid-cols-2 gap-[40px] px-[48px] py-[30px] w-[1000px]">
        {Object.entries(data)
          .slice(0, 4)
          .map(([category, items]) => (
            <div
              key={category}
              className="bg-white opacity-80 shadow-lg rounded-lg p-6 flex flex-col w-[390px] m-[15px] h-[390px] ml-[19px]"
            >
              <h2 className="text-xl font-semibold mb-4">
                <Link to={`/list/${category}`}>{category}</Link>
              </h2>
              <ul className="mt-[2px] space-y-2">
                {items.slice(0, 9).map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between text-gray-700"
                  >
                    <Link to={`/post/${category}/${item.id}`}>
                      {item.title}
                    </Link>
                    <span>{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
