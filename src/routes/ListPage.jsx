import { useParams } from "react-router-dom";
import postTree from "../tree.json";
import React from "react";
import { Link } from "react-router-dom";

const ListPage = () => {
  const { category } = useParams();
  const items = postTree[category] || [];

  return (
    <div>
      <h1 className="mt-[25px] mb-[15px] text-4xl">{category}</h1>
      {items.length > 0 ? (
        items
          .slice()
          .reverse()
          .map((metadata, idx) => (
            <div className="flex items-center mt-[5px]">
              <p className="mr-[15px]">{idx + 1}</p>
              <Link
                to={`/post/${category}/${metadata["key"]}`}
                key={metadata["key"]}
              >
                <p>{metadata["title"]}</p>
              </Link>
            </div>
          ))
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
};

export default ListPage;
