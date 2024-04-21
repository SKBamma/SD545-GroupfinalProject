import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { LoginResponse } from "../../types/types";

import "./playlist.css";

import Header from "./Header/header";
import Musiclist from "./Music-list/musiclist";
import MusicPlayer from "./Music-player/music.player";
import FavoriteMusic from "./Favorites-music/favorite.music";

export default function Playlist() {
  const [userRes, setUserRes] = useState<LoginResponse | null>(null);

  useEffect(() => {
    try {
      const storedData = sessionStorage.getItem("responseData");
      if (storedData) {
        const loginRes = JSON.parse(storedData);
        setUserRes(loginRes);
        console.log("Token is:", loginRes.accessToken);
        console.log("Login Res is:", loginRes);
      }
    } catch (error) {
      console.error("Error parsing sessionStorage data:", error);
    }
  }, []);

  return (
    <div className="border-line">
      <Header token={userRes?.accessToken} />
      <br />
      <hr className="breakline" />
      <br />
      <Musiclist />
      <br />
      <FavoriteMusic />
      <br />
      <MusicPlayer />
    </div>
  );
}
