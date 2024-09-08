import React, { useState, useEffect } from "react";
import root from "react-shadow";

const convertRelativePaths = (html, baseUrl) => {
  return html.replace(/src="([^"]*)"/g, (match, p1) => {
    if (p1.startsWith("http")) {
      return match;
    }
    return `src="${baseUrl}${p1}"`;
  });
};

const NotionPage = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const BASE_URL = "posts/sample/";

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
  }, []);

  return (
    <root.div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </root.div>
  );
};

export default NotionPage;
