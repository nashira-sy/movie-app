import { useEffect, useState } from "react";
import { getMovieDetails } from "../../services/movie/api";

export const useMovieDetail = (id: number) => {
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieDetails(id);
        if (response) setMovie(response);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovie();
  }, [id]);

  return { movie };
};
