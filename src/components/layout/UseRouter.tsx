import { BrowserRouter, Route, Routes } from "react-router-dom";

import ClassContents from "../organism/ClassContents";
import Login from "../organism/Login";
import Main from "../organism/Main";
import Register from "../organism/Register";
import Layout from "./Layout";

const UseRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Login />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/classcontent" element={<ClassContents />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default UseRouter;
