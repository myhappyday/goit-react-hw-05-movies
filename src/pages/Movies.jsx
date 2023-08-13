import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
// import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

import { fetchSearchMovies } from '../services/fetchAPI';
import Search from '../components/Search';
import placeholder from '../images/no-image.png';

const API_IMG_URL = `https://image.tmdb.org/t/p/original`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  // console.log('location: ', location);
  const currentPage = location.pathname === '/' ? 'movies' : location.pathname;

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
      // return;
    }
    setSearchParams({ query: value });
  };

  return (
    <div>
      <Search onSubmit={handleFormSubmit} />
      {/* {error && movies === null ? (
        <p>Sorry, there are no results for this query.</p>
      ) : (
        <h3>Oops...</h3>
      )} */}
      {error && <p>Sorry, we couldn't find anything for your query.</p>}
      {/* {error && <h3>Oops...</h3>} */}
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title, name, poster_path }) => {
            return (
              <li key={id}>
                <Link to={`${currentPage}/${id}`} state={{ from: location }}>
                  <img
                    src={poster_path ? API_IMG_URL + poster_path : placeholder}
                    alt={title ?? name}
                    loading="lazy"
                    width="300"
                    // height="300"
                  />
                  <p>{title ?? name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {page < totalPages && (
        <button
          type="button"
          aria-label="Load more"
          onClick={() => setPage(prev => prev + 1)}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default Movies;
