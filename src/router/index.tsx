import { Outlet } from "react-router-dom";
import Home from "../pages/home";
import ToDoApp from "../pages/toDoApp";
import Parallax from "../pages/parallax";
import AnimatedText from "../pages/animatedText";

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
          element: <Home />,
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
