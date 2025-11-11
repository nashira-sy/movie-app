import { useEffect, useState } from "react";
import { getMovieVideos } from "../../services/movie/api";

export const useMovieVideos = (id: number) => {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieVideos(id);
        if (response?.results?.length) {
          const trailer = response.results.find(
            (vid: any) => vid.type === "Trailer" && vid.site === "YouTube"
          );
          if (trailer) {
            setTrailerKey(trailer.key);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return { trailerKey };
};
