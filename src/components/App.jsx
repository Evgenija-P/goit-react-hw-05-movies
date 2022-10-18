import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { Home } from '../pages/Home.';
import { Movies } from '../components/Movies/Movies';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';
import { Cast } from '../pages/Cast';
import { Reviews } from '../components/Reviews/Reviews';
import { NotFound } from '../pages/NotFound';
import { fetchFilmsHomepage } from 'api';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchFilmsHomepage()
      .then(data => {
        console.log(data);
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
    <div>
      <Routes>
        <Route path="/" element={<Home films={films} />}>
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
      {isLoading && <Loader />}
      <ToastContainer transition={Flip} />
    </div>
  );
};
