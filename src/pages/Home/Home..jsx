import React from 'react';
import { IoFilmOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { NavItem } from './Home.styled';

export const Home = ({ films }) => {
  console.log(films);
  return (
    <div>
      <span>Trending films</span>
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
