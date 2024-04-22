import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import "./music.player.css";
import { Music, PlaylistType } from "../../../types/types";

interface Props {
  favList: PlaylistType[];
}
const URL = "http://localhost:4000/music/mocking_bird.mp3";

export default function MusicPlayer({ favList }: Props) {
  function handleNext() {
    console.log("next");
  }
  function handlePrevious() {
    console.log("Previous");
  }

  return (
    <div>
      <table className="table-playing">
        <tr className="tr-headers-playing">
          <td>
            <AudioPlayer
              showSkipControls
              // header={currentSong?.title}
              src={`${URL}+`}
              onClickNext={handleNext}
              onClickPrevious={handlePrevious}
              // onClickPrevious={handlePrevious}

              // other props here
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
