import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';

import { Home } from '../../pages/Home/Home.';
import { Movies } from '../../pages/Movies';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { Cast } from '../Cast';
import { Reviews } from '../Reviews/Reviews';
import { NotFound } from '../../pages/NotFound';
// import { fetchFilmsHomepage } from 'api';

import { SharedLayout } from '../SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            {/* <Route path="/movies/:movieDetails" element={<MovieDetails />}> */}
            {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer transition={Flip} />
    </div>
  );
};
