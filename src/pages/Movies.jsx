import React, { useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { AiOutlineCheck } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { fetchFilms } from 'api';
import { Wrapper, Buttom } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';

export const Movies = () => {
  const { movieId } = useParams();
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setText(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (text.trim() === '') {
      toast.error('Введите текст запроса!');
      return;
    }

    setQuery(e.target.name.value.toLowerCase());
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
      <Buttom to="/">
        <IoArrowBackCircleOutline size={20} color={'orange'} />
        Go back
      </Buttom>
      {!movieId && (
        <>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search films"
              onChange={handleChange}
            />
            <button type="submit">
              <span>Search</span>
            </button>
          </form>
          {isLoading && <Loader />}
          {films.length !== 0 && (
            <ul>
              {films.map(({ id, original_title, name }) => (
                <Link key={id} to={`${id}`}>
                  <p>
                    <AiOutlineCheck size={20} color={'orange'} />
                    {original_title}
                    {name}
                  </p>
                </Link>
              ))}
            </ul>
          )}
        </>
      )}

      <Outlet />
    </Wrapper>
  );
};
