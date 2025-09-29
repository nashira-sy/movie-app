import { useState, useEffect } from "react";
import type { Movie } from "../../services/movie/type";
import { getTopRated } from "../../services/movie/api";

export const useTopRatedMovie = () => {
  const [topRatedMovie, setTopRatedMovie] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTopRated();
        if (response) setTopRatedMovie(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return { topRatedMovie };
};
