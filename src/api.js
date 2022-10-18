import axios from 'axios';

export const API_KEY = `15150ce69b4b8fc4394b6dfaa88a912b`;
export const URL = `https://api.themoviedb.org/`;

export const APIEndPoints = {
  trendingMovie: '/3/trending/all/day',
  searchMovie: '/3/search/movie',
  movieDetails: `/3/movie/`,
};
// https://api.themoviedb.org/ 3/trending/movie/day ?api_key=15150ce69b4b8fc4394b6dfaa88a912b

export const fetchFilmsHomepage = async () => {
  return axios.get(`${URL}${APIEndPoints.trendingMovie}?api_key=${API_KEY}`);
};
// https://api.themoviedb.org/ 3/search/movie ?api_key=<<api_key>> &page=1&query=''

export const fetchFilms = async query => {
  return axios.get(
    `${URL}${APIEndPoints.searchMovie}?api_key=${API_KEY}&page=1&query=${query}`
  );
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export const fetchFilmsDetails = async id => {
  return axios.get(
    `${URL}${APIEndPoints.movieDetails}?${id}?api_key=${API_KEY}`
  );
};
