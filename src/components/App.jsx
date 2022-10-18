import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home.';
import { Movies } from '../components/Movies/Movies';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';
import { Cast } from '../pages/Cast';
import { Reviews } from '../components/Reviews/Reviews';
import { NotFound } from '../pages/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<div>Homepage</div>} />
          <Route path="movies" element={<Movies />}>
            <Route index element={<div>Movies</div>} />
            <Route path=":movieDetails" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
