import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MovieDetails } from '../../pages/MovieDetails/MovieDetails';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';

const Home = lazy(() => import('../../pages/Home/Home'));
const Cast = lazy(() => import('../../pages/Cast/Cast'));
const Reviews = lazy(() => import('../../pages/Reviews/Reviews'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const NotFound = lazy(() => import('../../pages/NotFound'));

export const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer transition={Flip} />
    </AppWrapper>
  );
};
