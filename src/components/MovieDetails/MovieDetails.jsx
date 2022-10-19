// import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { fetchFilmsDetails } from 'api';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

export const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const filmPosterUrl = `https://image.tmdb.org/t/p/w500`;
  console.log(movieId);

  useEffect(() => {
    setIsLoading(true);
    fetchFilmsDetails(movieId)
      .then(data => {
        console.log(data.data);
        setFilm(data.data);
      })
      .catch(error => {
        console.log(error);
        // toast.error('Oops, something went wrong. Repeat one more time!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!film) {
    return;
  }

  console.log(film);
  const { poster_path, original_title, vote_average, release_date, overview } =
    film;
  return (
    <div>
      {isLoading && <Loader />}
      {film && (
        <>
          <div>
            <img src={`${filmPosterUrl}${poster_path}`} alt={original_title} />
          </div>
          <div>
            <p>{original_title}</p>
            <p>{vote_average}</p>
            <p>{release_date.slice(0, 4)}</p>
            <p>{overview}</p>
            {film.genres.map(({ id, name }) => (
              <p key={id}>{name}</p>
            ))}
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
};
