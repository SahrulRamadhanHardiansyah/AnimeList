"use client";

import YouTube from "react-youtube";
import { useState, useEffect } from "react";

const StreamingPlayer = ({ apiData }) => {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (apiData?.episodes?.length > 0) {
      setSelectedEpisode(apiData.episodes[0]);
    }
  }, [apiData]);

  if (apiData?.region_locked) {
    return (
      <div className="text-center text-white p-6 bg-red-600 rounded-lg">
        <p className="text-lg font-bold">Konten tidak tersedia di wilayah Anda ❌</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="w-full aspect-video bg-black flex items-center justify-center mb-4">
        {error ? (
          <div className="text-center text-white">
            <p className="text-lg font-bold">Video tidak tersedia 😢</p>
            <p className="text-sm">Coba episode lain atau refresh halaman.</p>
          </div>
        ) : selectedEpisode ? (
          <YouTube videoId={selectedEpisode.mal_id} opts={{ playerVars: { autoplay: 0 } }} className="w-full h-full" onError={() => setError(true)} />
        ) : (
          <p className="text-white">Pilih episode untuk menonton</p>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {apiData?.episodes?.map((episode) => (
          <button
            key={episode.mal_id}
            className={`p-2 rounded-lg text-white ${selectedEpisode?.mal_id === episode.mal_id ? "bg-blue-500" : "bg-gray-700"} hover:bg-blue-600`}
            onClick={() => {
              setSelectedEpisode(episode);
              setError(false);
            }}
          >
            <span>{episode.title}</span>
            {episode.premium && <span className="text-yellow-400 ml-2">★ Premium</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StreamingPlayer;
