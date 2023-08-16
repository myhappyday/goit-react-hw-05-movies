import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'bb962418f002b21b8e856f495cf1a622';

export const fetchTrendingMovies = async (page = 1) => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
  return data.results;
};

export const fetchSearchMovies = async (value, page = 1) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: page,
    include_adult: false,
    query: value,
  });
  const { data } = await axios.get(`/search/movie?${searchParams}`);
  return data;
};

export const fetchMovieData = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};
