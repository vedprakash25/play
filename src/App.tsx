import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./router";

const App = () => {
  const RoutesRender = () => {
    const paths = useRoutes(routes());
    return paths;
  };
  return (
    <>
      <BrowserRouter>
        <RoutesRender />
      </BrowserRouter>
    </>
  );
};

export default App;
