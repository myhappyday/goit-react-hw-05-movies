import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'bb962418f002b21b8e856f495cf1a622';

// const fetchTrendingMovies = async (page = 1) => {
//   const searchParam = new URLSearchParams({
//     // q: value,
//     page: page,
//     key: API_KEY,
//     // image_type: 'photo',
//     // orientation: 'horizontal',
//     // per_page: 12,
//     // safesearch: true,
//   });

//   const response = await axios.get(`/trending/movie/day?${searchParam}`);

//   return response.data;
// };

export const fetchTrendingMovies = async (page = 1) => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
  // console.log('data.results:', data.results);
  return data.results;
};

export const fetchMovieData = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  // console.log('data:', data);
  return data;
};

// const api = {
//   fetchTrendingMovies,
//   // getTrendingMovies,
// };

// export default api;
