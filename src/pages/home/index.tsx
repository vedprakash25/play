import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

export default function Home() {
  const [data, setData] = useState<any>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState<any>({});

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
  const fetchBlog = (id?: number) => {
    if (!isPopupOpen) {
      setIsPopupOpen(true);
      document.body.style.overflow = "hidden";
      const filtered = data.find((item: any) => item.id === id);
      console.log(filtered);
      setPopupData(filtered);
    } else {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl px-10 py-5 mx-auto ">
      <h1 className="text-4xl text-center">Home</h1>
      {Object.values(data).length === 0 ? (
        <div className="d h-[50vh] flex justify-center items-center">
          <h2 className="text-3xl">Loading..</h2>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-3 gap-5">
          {data.map((item: any) => {
            const { id, title, description, author } = item;
            return (
              <div
                key={id}
                className="border-2 border-gradient flex flex-col justify-between gap-1 p-6 rounded-xl"
              >
                <div>
                  <h3 className="text-2xl ">{title}</h3>
                  <h4 className="opacity-60 ">
                    {description.slice(0, 100)}...
                  </h4>
                </div>
                <div className="mt-2 flex justify-between items-end">
                  <h3 className="text-lg opacity-50"> {author}</h3>

                  <button className="opacity-90" onClick={() => fetchBlog(id)}>
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {isPopupOpen ? (
        <div className="fixed inset-0 h-screen w-screen bg-black bg-opacity-60 z-10">
          <div className="h-full w-full flex justify-center items-center overflow-y-scroll p-20">
            <div className="border-gradient bg-black p-5 min-w-[400px] max-w-xl flex flex-col justify-center gap-2">
              <h3 className="text-lg font-light">Title: {popupData.title} </h3>
              <h3 className="text-lg font-light">
                Description:
                {popupData.description}
              </h3>
              <button
                onClick={() => fetchBlog()}
                className="border-[1px] border-gray-600 hover:border-gray-400 p-1 px-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
