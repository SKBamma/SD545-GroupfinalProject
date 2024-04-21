import { AxiosResponse } from "axios";
import { LoginResponse, Music } from "../../../types/types";
import "./music-list.css";

interface Props {
  musicList: Music[];
}

export default function Musiclist({ musicList }: Props) {
  console.log("Music");

  return (
    <div>
      <h3 className="song-interest">Songs you may interest</h3>
      <table className="table">
        <tr className="th-headers">
          <td className="td-1">Index</td>
          <td className="td-2">Title</td>
          <td className="td-2">Release Date</td>
          <td className="td-1">Action</td>
        </tr>
        {musicList.map((music, index) => (
          <tr className="th" key={music.id}>
            <td className="td-1-bold">{index + 1}</td>
            <td className="td-2">{music.title}</td>
            <td className="td-2">{music.releaseDate}</td>
            <td className="td-1">
              <i className="fa-solid fa-plus"></i>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
