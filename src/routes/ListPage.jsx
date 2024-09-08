import { useParams } from "react-router-dom";
import postTree from "../tree.json";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListPage = () => {
  const { category } = useParams();
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTitle = async (index) => {
      try {
        const response = await fetch(`/posts/${category}/${index}/index.html`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");

        const title = doc.querySelector("title")?.innerText || "No title found";
        return { index, title };
      } catch (error) {
        console.error("Error fetching title:", error);
        return { index, title: "Error fetching title" };
      }
    };

    const fetchAllTitles = async () => {
      try {
        const indices = postTree[category] || [];
        if (indices.length === 0) {
          setTitles([]);
          return;
        }

        const titlePromises = indices.map((index) => fetchTitle(index));
        const fetchedTitles = await Promise.all(titlePromises);
        setTitles(fetchedTitles);
      } catch (error) {
        console.error("Error fetching titles:", error);
        setTitles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllTitles();
  }, [category]);

  if (loading) {
    return <div></div>;
  }

  return (
    <div>
      <h1>{category}</h1>
      {titles.length > 0 ? (
        titles.map(({ index, title }) => (
          <Link to={`/post/${category}/${index}`}>
            <p key={index}>{title}</p>
          </Link>
        ))
      ) : (
        <p>No titles available</p>
      )}
    </div>
  );
};

export default ListPage;
