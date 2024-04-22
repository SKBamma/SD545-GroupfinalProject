import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "../pages/login/Login";
import Playlist from "../pages/playlist/Playlist";
import ErrorPage from "../pages/errorPage/ErrorPage";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
