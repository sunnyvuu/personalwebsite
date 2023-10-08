import { useEffect, useState } from "react";
import getNowPlayingItem from "../api/spotify";
import "../style/NowPlaying.css";

type NowPlayingResult = {
  albumImageUrl?: string;
  title?: string;
  songUrl?: string;
  artist?: string;
};

export const SpotifyNowPlaying = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<NowPlayingResult>({});
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    getNowPlayingItem().then((song) => {
      if (song) {
        setResult(song);
        setIsPlaying(true);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && !isPlaying && (
        <div>
          <span>Spotify User is Currently Offline</span>
        </div>
      )}
      {!loading && isPlaying && (
        <div>
          <div>
            <span>Now playing on Spotify</span>
          </div>
          <div>
            <div>
              {" "}
              <img
                src={result.albumImageUrl}
                alt={`${result.title} album art`}
              />
            </div>
            <div className="song-info">
              <a
                href={result.songUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {result.title}
              </a>
              <p>{result.artist}</p>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
