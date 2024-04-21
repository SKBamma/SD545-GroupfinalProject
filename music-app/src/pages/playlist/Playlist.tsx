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
import { getPlaylist } from "../../apis/services/playlist.service";

export default function Playlist() {
  const [musicList, setMusicList] = useState<Music[]>([]);
  const [favList, setFavList] = useState<Music[]>([]);

  async function getInitailMusicList(token: string) {
    try {
      const res = await getMusic("", token);
      console.log("Inital music : ", res.data);
      setMusicList(res.data);
    } catch (e) {
      console.log(e);
      throw new Error("Error getting initail Music.");
    }
  }

  async function getFavPlaylist() {
    try {
      const response = await getPlaylist(sessionStorage.accessToken);
      console.log("Get Playlist Res:", response);
      return response;
    } catch (e) {
      console.log(e);
      throw new Error("getFavPlaylist - Error getting Fav Music List.");
    }
  }
  async function setFavPlaylist() {
    try {
      const response = await getFavPlaylist();
      console.log("Fav Playlist:", response.data);
      setFavList(response.data);
    } catch (e) {
      console.log(e);
      throw new Error("getFavPlaylist - Error getting Fav Music List.");
    }
  }

  useEffect(() => {
    try {
      const accessToken = sessionStorage.getItem("accessToken");
      if (accessToken) {
        console.log("Token is:", accessToken);

        console.log("Inital music");
        const initialMusicList = getInitailMusicList(accessToken);
        setFavPlaylist();
      }
    } catch (error) {
      console.error("Error parsing sessionStorage data:", error);
    }
  }, []);

  return (
    <div className="border-line">
      <Header
        token={sessionStorage.accessToken}
        updateMusicList={setMusicList}
      />
      <br />
      <hr className="breakline" />
      <br />
      <Musiclist musicList={musicList} />
      <br />
      <FavoriteMusic favList={favList} />
      <br />
      <MusicPlayer />
    </div>
  );
}
