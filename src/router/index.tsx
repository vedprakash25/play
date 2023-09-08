import { Outlet } from "react-router-dom";
import { HomePage, Parallax, ToDoApp, AnimatedText } from "../pages";

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
