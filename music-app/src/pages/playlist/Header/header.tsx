import { ChangeEvent, FormEvent, useState } from "react";

import { getMusic } from "../../../apis/services/music.service";

import logo from "../../images/logo.jpeg";
import "./header.css";
import { Music } from "../../../types/types";

interface Props {
  token: string | undefined;
  updateMusicList: (musicList: Music[]) => void;
}

export default function Header({ token, updateMusicList }: Props) {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching :", search);
    console.log(
      "Search accessToken :",
      sessionStorage.responseData.accessToken
    );
    handleSearch(search);
  };

  async function handleSearch(title: string) {
    try {
      console.log("Header Element token ---->  ", token);

      const response = await getMusic(title, token);
      console.log("Get Music API :", response);
      if (!response.data.length) {
        throw new Error("Error Seraching data.");
      }

      console.log("Searching Data :", response.data);
      updateMusicList(response.data);
    } catch (e) {
      console.log("Error - Searching Song Title", e);
    }
  }

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <div className="header">
        <img src={logo} alt="music profile" className="logo" />
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search..."
            className="search"
            onChange={handleSearchInput}
          />
        </form>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
}
