import React, { useState, useEffect } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

import { NavItem, Imem, Wrapper, Title, Options } from './Home.styled';
import { fetchFilmsHomepage } from '../../servises/api';
import { Loader } from '../../components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    fetchFilmsHomepage()
      .then(data => {
        const { results, total_results } = data.data;
        console.log(results);
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
    <Wrapper>
      <Title>Trending films</Title>
      {isLoading && <Loader />}
      {
        <Imem>
          {films.map(({ id, original_title, name }) => (
            <NavItem
              key={id}
              to={`movies/${id}`}
              state={{
                from: location,
              }}
            >
              <p>
                <AiOutlineCheck size={20} color={'orange'} />
                <Options>
                  {original_title}
                  {name}
                </Options>
              </p>
            </NavItem>
          ))}
        </Imem>
      }
    </Wrapper>
  );
};

export default Home;
