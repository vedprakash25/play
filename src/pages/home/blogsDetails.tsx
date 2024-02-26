import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function BlogsDetails() {
  const { blogId } = useParams();
  const [BlogID, setBlogID] = useState<string>();
  const [data, setData] = useState();

  const fetchBlog = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/blogs/${blogId}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useLayoutEffect(() => {
    console.log(blogId, BlogID);
    const temp = blogId;
    setBlogID(temp);
    fetchBlog(BlogID);
  }, [blogId]);

  return (
    <div className="max-w-2xl mx-auto grid gap-5 mt-20">
      {data ? (
        <div>
          BlogsDetails: {BlogID}
          <ReactMarkdown>{data?.description}</ReactMarkdown>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
