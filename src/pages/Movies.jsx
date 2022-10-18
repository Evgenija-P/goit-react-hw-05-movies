import React from 'react';
import { useParams } from 'react-router-dom';

import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
  //  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <p>Заголовок страницы</p>
      <button>Go back</button>
      {/* <MovieDetails /> */}
      <Outlet />
    </div>
  );
};
