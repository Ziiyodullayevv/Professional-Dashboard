import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar.jsx";
import { data } from "../utils/data.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<SideBar />}>
          {data.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
