// src/components/movie.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import type { Movie } from "../../services/movie";

interface Props {
  movie: Movie;
}

const MovieComponent: React.FC<Props> = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer w-40 flex-shrink-0"
      onClick={() => navigate(`/detail/${movie.id}`)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg shadow-md"
      />
      <h2 className="mt-2 text-sm font-semibold truncate">{movie.title}</h2>
    </div>
  );
};

export default MovieComponent;
