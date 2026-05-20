import React, { lazy } from "react";
import Dasbboard from "./Pages/Dasbboard";
import Table from "./component/Table";

const Home = lazy(() => import("./Pages/Dasbboard"));
export const UserForm = lazy(() => import("./component/Modal"));
export const Chart = lazy(() => import("./component/chart"));

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
