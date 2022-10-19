import React from 'react';
import { useParams } from 'react-router-dom';

// import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
  const { movieId } = useParams();
  // console.log(movieId);
  //  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      {!movieId && <p>Заголовок страницы</p>}

      <button to="/" end>
        Go back
      </button>

      <Outlet />
    </div>
  );
};
