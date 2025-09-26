// src/hooks/movie/useNowPlaying.tsx

import { useState, useEffect } from "react";
import type { Movie } from "../../services/movie/type";
import { getNowPlaying } from "../../services/movie/api"; 

export const useNowPlayingMovie = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNowPlaying();
        if (response) {
          setNowPlayingMovie(response.results);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { nowPlayingMovie };
};