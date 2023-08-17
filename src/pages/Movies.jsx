import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchSearchMovies } from '../services/fetchAPI';
import Search from '../components/Search';
import Section from '../components/Section';
import MoviesList from '../components/MoviesList';
import ImageErrorView from '../components/ImageErrorView';
import imageError from '../images/error-oops.jpg';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setError(false);
    const searchValue = searchParams.get('query') ?? '';

    if (!searchValue) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      try {
        const response = await fetchSearchMovies(searchValue, page);
        const { results, total_pages } = response;

        // if (response.length === 0) setError(true);
        if (results.length === 0) {
          setError(true);
          toast.warn(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
          return;
        }

        setMovies(prev => [...prev, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        setError(true);
        console.error(error.message);
        toast.error(
          'Oops! Something went wrong. Please, reload the page and try again.'
        );
      }
    };

    fetchMovies();
  }, [page, searchParams]);

  const handleFormSubmit = value => {
    setMovies([]);
    setPage(1);
    setTotalPages(1);

    if (value === searchParams.get('query')) {
      return toast.warn(
        'You have already searched for movies with this keyword. Please try something else.'
      );
    }
    setSearchParams({ query: value });
  };

  return (
    <div>
      <Search onSubmit={handleFormSubmit} />
      {error && (
        <ImageErrorView
          imageURL={imageError}
          alt={'Something went wrong'}
          width="600"
          message={'Please, reload the page and try again.'}
        />
      )}
      {!error && movies && movies.length > 0 && (
        <Section title="At your request, the following films were found:">
          {error && (
            <ImageErrorView
              imageURL={imageError}
              alt={'Something went wrong'}
              width="600"
              message={'Please, reload the page and try again.'}
            />
          )}
          {/* {error && <p>Sorry, we couldn't find anything for your query.</p>} */}
          <MoviesList movies={movies} />
          {page < totalPages && (
            <button
              type="button"
              aria-label="Load more"
              onClick={() => setPage(prev => prev + 1)}
            >
              Load more
            </button>
          )}
        </Section>
      )}
    </div>
  );
};

export default Movies;
