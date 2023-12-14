import React from "react";
import SideBar from "../components/sidebar/SideBar.jsx";
import SignIn from "../components/signin/SignIn.jsx";
import SignUp from "../components/signup/SignUp.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
