import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Wrapper, Buttom } from './Movies.styled';

export const Movies = () => {
  const { movieId } = useParams();

  return (
    <Wrapper>
      {!movieId && <p>Заголовок страницы</p>}

      <Buttom to="/">
        <IoArrowBackCircleOutline size={20} color={'orange'} />
        Go back
      </Buttom>

      <Outlet />
    </Wrapper>
  );
};
