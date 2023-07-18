import { useEffect, useState } from "react";
import "./App.css";

function App() {
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
      <div className="border-2 max-w-lg mx-auto w-full">
        {data.map((item) => {
          const { id, title } = item;
          return <div key={id}>{title}</div>;
        })}
      </div>
    </>
  );
}

export default App;
