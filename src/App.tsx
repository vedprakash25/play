import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./router";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const RoutesRender = () => {
    const paths = useRoutes(routes());
    return paths;
  };

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RoutesRender />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
