const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`; // stores the URL for the Spotify API token endpoint, where the request for a new access token will be sent
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getAccessToken = async () => {
  const basic = btoa(`${client_id}:${client_secret}`);
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token,
  });

  const body = params.toString();

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async function getNowPlayingItem() {
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400) {
    return false;
  }
  const song = await response.json();
  const albumImageUrl = song.item.album.images[0].url;
  const artist = song.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(", ");
  const isPlaying = song.is_playing;
  const songUrl = song.item.external_urls.spotify;
  const title = song.item.name;
  console.log(albumImageUrl, artist, isPlaying, songUrl, title);
  return {
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  };
}
