import React from 'react';
import { IoFilmOutline } from 'react-icons/io5';

export const Home = ({ films }) => {
  console.log(films);
  return (
    <div>
      {
        <ul>
          {films.map(({ id, original_title, name }) => (
            <li key={id}>
              <p>
                <IoFilmOutline size={24} color={'blue'} />
                {original_title} {name}
              </p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
