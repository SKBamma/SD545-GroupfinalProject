import http from "../axios";

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
