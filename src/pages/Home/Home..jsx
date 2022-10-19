import React, { useState, useEffect } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { NavItem } from './Home.styled';
import { fetchFilmsHomepage } from '../../api';
import { Loader } from '../../components/Loader/Loader';

export const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchFilmsHomepage()
      .then(data => {
        const { results, total_results } = data.data;
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

  return (
    <div>
      <span>Trending films</span>
      {isLoading && <Loader />}
      {
        <ul>
          {films.map(({ id, original_title, name }) => (
            <NavItem key={id} to={`movies/${id}`}>
              <p>
                <AiOutlineCheck size={20} color={'orange'} />
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
