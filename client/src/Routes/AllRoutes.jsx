import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import PagenotFound from "../Pages/PageNotFound";
import SignUp from "../Pages/SignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/a" element={<HomePage />}></Route>
      <Route path="*" element={<PagenotFound/>}></Route> 
    </Routes>
  );
};

export default AllRoutes;
