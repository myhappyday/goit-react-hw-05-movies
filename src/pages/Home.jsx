import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchTrendingMovies } from '../services/fetchAPI';

import Section from '../components/Section';
import MoviesList from '../components/MoviesList';
import ImageErrorView from '../components/ImageErrorView';
import imageError from '../images/error-oops.jpg';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(false);

    const fetchMovies = async () => {
      try {
        const response = await fetchTrendingMovies();

        if (response.length === 0) setError(true);

        setMovies(response);
      } catch (error) {
        setError(true);
        console.error(error.message);
        toast.error(
          'Oops! Something went wrong. Please, reload the page and try again.'
        );
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {!error && movies && movies.length > 0 && (
        <Section title="Trending today">
          <MoviesList movies={movies} />
        </Section>
      )}
      {error && (
        <ImageErrorView
          imageURL={imageError}
          alt={'Something went wrong'}
          width="600"
          message={
            'Oops! Something went wrong. Please, reload the page and try again.'
          }
        />
      )}
    </>
  );
};

export default Home;
