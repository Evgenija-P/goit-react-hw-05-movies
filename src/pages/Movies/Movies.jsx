import React, { useState, useEffect } from 'react';
import {
  useParams,
  Outlet,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { AiOutlineCheck } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { fetchFilms } from 'servises/api';
import { Wrapper, Buttom, Form, Input, Search } from './Movies.styled';
import { NavItem, Options } from '../Home/Home.styled';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const { movieId } = useParams();
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const link = location.state?.from || `/`;

  const handleChange = e => {
    setText(e.target.value.toLowerCase());
    setSearchParams('');
  };
  console.log(searchParams);

  const handleSubmit = e => {
    e.preventDefault();

    if (text.trim() === '') {
      toast.error('Введите текст запроса!');
      return;
    }

    setQuery(e.target.name.value.toLowerCase());
    setSearchParams({ query: e.target.name.value.toLowerCase() });
  };

  useEffect(() => {
    setFilms([]);
  }, [text]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setIsLoading(true);
    fetchFilms(query)
      .then(data => {
        setFilms(data.data.results);
      })
      .catch(error => {
        console.log(error);
        toast.error('Oops, something went wrong. Repeat one more time!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <Wrapper>
      <Buttom to={link}>
        <IoArrowBackCircleOutline size={20} color={'orange'} />
        Go back
      </Buttom>
      {!movieId && (
        <>
          <Form onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              value={text}
              autoComplete="off"
              placeholder="Search films"
              onChange={handleChange}
            />
            <Search type="submit">
              <span>Search</span>
            </Search>
          </Form>
          {isLoading && <Loader />}
          {films.length !== 0 && (
            <ul>
              {films.map(({ id, original_title, name }) => (
                <NavItem
                  key={id}
                  to={`${id}`}
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
            </ul>
          )}
        </>
      )}

      <Outlet />
    </Wrapper>
  );
};

export default Movies;
