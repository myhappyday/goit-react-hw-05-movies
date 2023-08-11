import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchTrendingMovies } from '../services/fetchAPI';

const Home = () => {
  const [movies, setMovies] = useState();
  // const [page, setPage] = useState();
  // const [isLoading, setIsLoading] = useState(false);
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
    <div>
      {error && <h3>Oops...</h3>}
      {!error && movies && movies.length > 0 && (
        <>
          <h2>Trending today</h2>
          <ul>
            {movies.map(({ title, id }) => {
              return (
                <li key={id}>
                  <Link
                    to={`movies/${id}`}                    
                    //  state={{ from: location }}
                  >
                    {title}
                  </Link>
                  {/* <p>{title}</p> */}
                  {/* <p>{id}</p> */}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;
