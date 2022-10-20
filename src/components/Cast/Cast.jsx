import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchFilmsCast } from 'servises/api';
import { Loader } from '../Loader/Loader';
import { List, Img, Item, Title, Character } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const filmPosterUrl = `https://image.tmdb.org/t/p/w500`;
  const noImages = `https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png`;

  useEffect(() => {
    setIsLoading(true);
    fetchFilmsCast(movieId)
      .then(data => {
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

  return (
    <div>
      {isLoading && <Loader />}
      {cast.length !== 0 ? (
        <List>
          {cast.map(({ id, name, profile_path, character }) => (
            <Item key={id}>
              {profile_path ? (
                <Img src={`${filmPosterUrl}${profile_path}`} alt={name} />
              ) : (
                <Img src={`${noImages}`} alt={name} />
              )}
              <Title>{name} </Title>
              <p>
                <Character>Character: </Character>
                {character}
              </p>
            </Item>
          ))}
        </List>
      ) : (
        <Title>
          Unfortunately, we do not have information about the actors of this
          film.{' '}
        </Title>
      )}
    </div>
  );
};

// export default Cast;
