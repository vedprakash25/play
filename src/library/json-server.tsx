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
      <div className="bg-slate-800 p-12 h-screen">
        <h1 className="text-3xl font-medium text-center mb-5">
          JSON Server Posts
        </h1>
        <h6 className="text-white max-w-2xl mx-auto mb-5">
          Here we are fetching posts from local data [.json] that is served
          using library json-server
        </h6>
        <div className="p-5 grid md:grid-cols-3 border-2 border-white gap-4 max-w-4xl mx-auto">
          {data.length > 0
            ? data.map((item) => {
                const { id, title, body } = item;
                return (
                  <div className="border-2 border-white p-3 px-4">
                    <div key={id}>
                      <h1 className="text-lg text-white ">{title}</h1>
                      <h2 className="text-md text-slate-300 mt-2">{body}</h2>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}
