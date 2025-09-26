import React from 'react'
import { useNavigate } from "react-router-dom"; 
import { usePopularMovie } from '../../hooks/movie/usePopuler';
import MovieComponent from '../../components/movie';
import { Card } from '../../components/card';

const HomeScreen = () => {
  const navigate = useNavigate();
  const { popularMovie } = usePopularMovie();

  return (
    <div className="w-full px-10 flex flex-col gap-5">
      <div className="flex w-full flex-col">
        <h1 className="text-2xl font-bold">Popular</h1>
        <div className="flex flex-row gap-5 py-5 overflow-x-auto">
          {popularMovie.map((movie) => (
            <MovieComponent key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;