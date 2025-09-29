import { useState, useEffect } from "react";
import type { Movie } from "../../services/movie/type";
import { getUpcoming } from "../../services/movie/api";

export const useUpcomingMovie = () => {
  const [upcomingMovie, setUpcomingMovie] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUpcoming();
        if (response) setUpcomingMovie(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return { upcomingMovie };
};
