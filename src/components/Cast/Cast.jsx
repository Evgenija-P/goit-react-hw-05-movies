import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchFilmsCast } from 'api';
import { Loader } from '../Loader/Loader';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchFilmsCast(movieId)
      .then(data => {
        console.log(data.data.cast);
        setCast(data.data.cast);
      })
      .catch(error => {
        console.log(error);
        toast.error('Oops, something went wrong. Repeat one more time!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!cast) {
    return;
  }

  // const { id, name } = cast;

  return (
    <div>
      {isLoading && <Loader />}
      {cast && (
        <ul>
          {cast.map(({ id, name, character }) => (
            <li key={id}>
              {name} <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
