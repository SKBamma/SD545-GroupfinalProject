import http from "../axios";

const accessToken = sessionStorage.getItem("accessToken");

export function getPlaylist(token: string | undefined) {
  try {
    const response = http.get(`/api/playlist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (e) {
    console.log("Error fetching music:", e);
    throw e;
  }
}

export function addPlaylist(songId: string) {
  console.log("API : ", accessToken);
  console.log("SongID : ", songId);
  return http.post(
    `/api/playlist/add`,
    { songId: songId },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
}
