import { useEffect, useState } from "react";

export default function JsonServer() {
  const [data, setData] = useState([]);

  const fetchAllPosts = async () => {
    const response = await fetch("http://localhost:3030/posts");
    const data = await response.json();
    setData(data);
    console.log("fetching all posts", response, data);
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <>
      <div className="bg-slate-800 p-5">
        <h1 className="text-xl text-center mb-5">JSON Server posts</h1>
        <div className="p-5 grid md:grid-cols-3 border-2 border-white gap-4 max-w-4xl mx-auto">
          {data.map((item) => {
            const { id, title, body } = item;
            return (
              <div className="border-2 border-white p-3 px-4">
                <div key={id}>
                  <h1 className="text-lg text-white ">{title}</h1>
                  <h2 className="text-md text-slate-300 mt-2">{body}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
