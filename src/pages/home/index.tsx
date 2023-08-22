import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState<any>([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api");
      const jsonData = await response.json();
      setData(jsonData);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl px-10 pt-5 mx-auto">
      <h1 className="text-4xl">Home</h1>
      <div className="mt-10 grid grid-cols-3 gap-5">
        {data.map((item: any) => {
          const { id, title, description, author } = item;
          return (
            <div
              key={id}
              className="border border-gray flex flex-col justify-between gap-1 p-6 rounded-xl"
            >
              <div>
                <h3 className="text-2xl ">{title}</h3>
                <h4 className="opacity-60 ">{description.slice(0, 100)}...</h4>
              </div>
              <div className="mt-2">
                <h3 className="text-xl opacity-60"> {author}</h3>
                <Link to="/">Read More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
