// import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchFilmsDetails } from 'api';
import { Loader } from '../Loader/Loader';
import {
  WrapperFilm,
  WrapperOptions,
  Options,
  Params,
  Title,
  Topic,
  TopicOptions,
  NavItem,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const filmPosterUrl = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    setIsLoading(true);
    fetchFilmsDetails(movieId)
      .then(data => {
        setFilm(data.data);
      })
      .catch(error => {
        console.log(error);
        toast.error('Oops, something went wrong. Repeat one more time!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!film) {
    return;
  }

  const { poster_path, original_title, release_date, overview } = film;
  const procent = Math.round(Number(film.vote_average) * 10);

  return (
    <div>
      {isLoading && <Loader />}
      {film && (
        <WrapperFilm>
          <div>
            <img src={`${filmPosterUrl}${poster_path}`} alt={original_title} />
          </div>
          <Params>
            <Title>
              {original_title} ({release_date.slice(0, 4)})
            </Title>
            <span>User score: {procent}%</span>
            <Topic>Overview</Topic>
            <span>{overview}</span>
            <Topic>Genres</Topic>
            <div>
              {film.genres.map(({ id, name }) => (
                <span key={id}>{name}, </span>
              ))}
            </div>
          </Params>
        </WrapperFilm>
      )}
      <WrapperOptions>
        <TopicOptions>Additional Information</TopicOptions>
        <Options>
          <NavItem to="cast">Cast</NavItem>
          <NavItem to="reviews">Reviews</NavItem>
        </Options>
        <Outlet />
      </WrapperOptions>
    </div>
  );
};