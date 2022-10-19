import React, { useState, useEffect } from 'react';
import { IoFilmOutline } from 'react-icons/io5';
// import { Link } from 'react-router-dom';
import { NavItem } from './Home.styled';
import { toast } from 'react-toastify';

import { fetchFilmsHomepage } from '../../api';
import { Loader } from '../../components/Loader/Loader';

export const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchFilmsHomepage()
      .then(data => {
        // console.log(data);
        const { results, total_results } = data.data;
        // console.log(results);
        setFilms(results);
        if (total_results === 0) {
          toast.warn('Oops, we did not find anything for your request!');
        }
      })
      .catch(error => {
        console.log(error);
        toast.error('Oops, something went wrong. Repeat one more time!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  // console.log(films);
  return (
    <div>
      <span>Trending films</span>
      {isLoading && <Loader />}
      {
        <ul>
          {films.map(({ id, original_title, name }) => (
            <NavItem key={id} to={`movies/${id}`}>
              <p>
                <IoFilmOutline size={24} color={'blue'} />
                {original_title}
                {name}
              </p>
            </NavItem>
          ))}
        </ul>
      }
    </div>
  );
};
