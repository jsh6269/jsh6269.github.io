import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import root from "react-shadow";

const convertRelativePaths = (html, baseUrl) => {
  return html
    .replace(/src="([^"]*)"/g, (match, p1) => {
      if (p1.startsWith("http")) {
        return match;
      }
      return `src="${baseUrl}/${p1}"`;
    })
    .replace(/href="([^"]*)"/g, (match, p1) => {
      if (p1.startsWith("http")) {
        return match;
      }
      return `href="${baseUrl}/${p1}"`;
    });
};

const NotionPage = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const { category, num } = useParams();
  const BASE_URL = `/posts/${category}/${num}`;

  useEffect(() => {
    fetch(`${BASE_URL}/index.html`)
      .then((response) => response.text())
      .then((data) => {
        data = convertRelativePaths(data, BASE_URL);
        setHtmlContent(data);
      })
      .catch((error) => {
        console.error("Error fetching the HTML file:", error);
      });
  }, [BASE_URL]);

  return (
    <root.div className="mb-12 mt-6 mx-[14px] sm:mx-8">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </root.div>
  );
};

export default NotionPage;
