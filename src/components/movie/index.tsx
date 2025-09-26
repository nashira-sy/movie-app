import React from 'react'
import {Card} from './../card/index';
import type { Movie } from '../../services/movie';

// interface Movie {
//   date: string;
//   title: string;
//   duration: string;
//   rating: number;
//   genre: string[];
//   img: string;
// }

interface Props {
  movie: Movie;
}

const MovieComponent = ({ movie }: Props) => {
 
    const { title,poster_path } = movie;

  return (
    <Card color="#ffffff" border="10px" width="w-50">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          style={{ width: "150px", height: "225px", borderRadius: "10px" }}
        />
      </div>
      <p className='w-[150px]'>{title}</p>
    </Card>
  );
};

export default MovieComponent