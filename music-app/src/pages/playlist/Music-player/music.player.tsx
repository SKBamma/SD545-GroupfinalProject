import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import "./music.player.css";

export default function MusicPlayer() {
  function handleNext() {
    console.log("next");
  }

  return (
    <div>
      <table className="table-playing">
        <tr className="tr-headers-playing">
          <td>
            <AudioPlayer
              // header={currentSong?.title}
              src="http://localhost:4000/music/mocking_bird.mp3"
              onClickNext={handleNext}
            // onClickPrevious={handlePrevious}


            // other props here
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
