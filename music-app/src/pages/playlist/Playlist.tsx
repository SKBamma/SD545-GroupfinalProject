import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useState,
  createContext,
} from "react";
import { LoginResponse, Music } from "../../types/types";

import "./playlist.css";

import Header from "./Header/header";
import Musiclist from "./Music-list/musiclist";
import MusicPlayer from "./Music-player/music.player";
import FavoriteMusic from "./Favorites-music/favorite.music";
import { getMusic } from "../../apis/services/music.service";

export default function Playlist() {
  const [userRes, setUserRes] = useState<LoginResponse | null>(null);
  const [musicList, setMusicList] = useState<Music[]>([]);

  async function getInitailMusic(token: string) {
    try {
      const res = await getMusic("", token);
      console.log("Inital music : ", res.data);
      setMusicList(res.data);
    } catch (e) {
      console.log(e);
      throw new Error("Error getting initail Music.");
    }
  }

  useEffect(() => {
    try {
      const storedData = sessionStorage.getItem("responseData");
      if (storedData) {
        const loginRes = JSON.parse(storedData);
        setUserRes(loginRes);
        console.log("Token is:", loginRes.accessToken);
        console.log("Login Res is:", loginRes);

        const initialMusicList = getInitailMusic(loginRes.accessToken);
        console.log("Inital music : ", initialMusicList);
      }
    } catch (error) {
      console.error("Error parsing sessionStorage data:", error);
    }
  }, []);

  return (
    <div className="border-line">
      <Header token={userRes?.accessToken} updateMusicList={setMusicList} />
      <br />
      <hr className="breakline" />
      <br />
      <Musiclist musicList={musicList} />
      <br />
      <FavoriteMusic />
      <br />
      <MusicPlayer />
    </div>
  );
}
