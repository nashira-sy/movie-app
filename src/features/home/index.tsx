import React, { useEffect, useState } from "react";
import MovieComponent from "../../components/movie";
import { getPopular, getUpcoming, getTopRated } from "../../services/movie";
import type { Movie } from "../../services/movie";

const HomeScreen: React.FC = () => {
  const [popular, setPopular] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);

  useEffect(() => {
  const fetchMovies = async () => {
    const popularRes = await getPopular();
    const upcomingRes = await getUpcoming();
    const topRatedRes = await getTopRated();

    setPopular(popularRes?.results ?? []);
    setUpcoming(upcomingRes?.results ?? []);
    setTopRated(topRatedRes?.results ?? []);
  };

  fetchMovies();
}, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Popular</h1>
      <div className="flex gap-4 overflow-x-auto">
        {popular.map((movie) => (
          <MovieComponent key={movie.id} movie={movie} />
        ))}
      </div>

      <h1 className="text-xl font-bold mt-10 mb-4">Upcoming</h1>
      <div className="flex gap-4 overflow-x-auto">
        {upcoming.map((movie) => (
          <MovieComponent key={movie.id} movie={movie} />
        ))}
      </div>

      <h1 className="text-xl font-bold mt-10 mb-4">Top Rated</h1>
      <div className="flex gap-4 overflow-x-auto">
        {topRated.map((movie) => (
          <MovieComponent key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
