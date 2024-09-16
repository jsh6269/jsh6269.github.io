import { Link } from "react-router-dom";
import data from "../tree.json";

// 홈화면
const HomePage = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-start justify-center sm:mt-[30px] sm:mb-[50px] sm:ml-[5px]">
      <div className="flex overflow-x-auto whitespace-nowrap gap-[17px] sm:hidden bg-slate-300 w-screen py-5 px-5 mb-2">
        {Object.entries(data).map(([category, _]) => (
          <Link to={`/list/${category}`}>{category}</Link>
        ))}
        <Link to={`/guests`}>Guests</Link>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-[40px] px-[20px] pt-[25px] sm:pt-[38px] pb-[50px] sm:px-[48px] sm:py-[30px] w-screen sm:w-[1000px]">
        {Object.entries(data)
          .slice(0, 4)
          .map(([category, items]) => (
            <div
              key={category}
              className="bg-white opacity-80 shadow-lg rounded-lg p-6 flex flex-col sm:w-[390px] sm:m-[15px] sm:h-[390px] sm:ml-[19px]"
            >
              <h2 className="text-xl font-semibold mb-4">
                <Link to={`/list/${category}`}>{category}</Link>
              </h2>
              <ul className="mt-[2px] space-y-2">
                {items
                  .slice(-9)
                  .reverse()
                  .map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between text-gray-700"
                    >
                      <Link to={`/post/${category}/${item.id}`}>
                        {item.title.length > 20
                          ? `${item.title.slice(0, 20)} ...`
                          : item.title}{" "}
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
