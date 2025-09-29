// src/features/detail/index.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMovieDetail } from "../../hooks/movie/useDetail";

const DetailScreen = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { movie } = useMovieDetail(Number(id));

  if (!movie) return <div className="p-10">Loading...</div>;

  return (
    <div className="w-full p-10 flex flex-col lg:flex-row gap-10">
      {/* Poster */}
      <div className="w-full lg:w-1/3">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Movie Info */}
      <div className="flex flex-col gap-5 w-full lg:w-2/3">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-gray-600 italic">{movie.tagline}</p>
        <p>{movie.overview}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {movie.genres?.map((g: any) => (
            <span
              key={g.id}
              className="bg-gray-200 text-sm px-2 py-1 rounded-full"
            >
              {g.name}
            </span>
          ))}
        </div>

        <p>
          <span className="font-semibold">Release Date:</span>{" "}
          {movie.release_date}
        </p>
        <p>
           <span className="font-semibold">Rating:</span>{" "}
           {movie.vote_average.toFixed(1)} ⭐
        </p>

        {/* Cast */}
        <div>
  <h2 className="text-xl font-semibold mt-5">Cast</h2>
  <div className="flex gap-5 overflow-x-auto py-3">
    {movie.credits?.cast?.slice(0, 10).map((c: any) => (
      <div key={c.cast_id} className="w-24 text-center">
        <img
          src={
            c.profile_path
              ? `https://image.tmdb.org/t/p/w200${c.profile_path}`
              : "https://via.placeholder.com/200x300?text=No+Image"
          }
          alt={c.name}
          className="w-24 h-32 object-cover rounded-lg shadow-md"
        />
        <p className="text-sm font-medium mt-1 truncate">{c.name}</p>
        <p className="text-xs text-gray-500 truncate">{c.character}</p>
      </div>
    ))}
  </div>
</div>


        <button
          onClick={() => navigate(-1)}
          className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default DetailScreen;
