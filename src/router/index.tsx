import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import {
  HomePage,
  Parallax,
  ToDoApp,
  AnimatedText,
  BlogsDetails,
} from "../pages";

function ViewWithHeaderAndFooter() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default function routes() {
  return [
    {
      path: "/",
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/blogs/:blogId",
          element: <BlogsDetails />,
        },
        {
          path: "/todoapp",
          element: <ToDoApp />,
        },
        {
          path: "/parallax",
          element: <Parallax />,
        },
        {
          path: "/animated-text",
          element: <AnimatedText />,
        },
      ],
    },
  ];
}
