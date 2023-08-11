import { Suspense, useState, useEffect, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMovieData } from '../services/fetchAPI';

// import { fetchMovieData } from '../services/fetchAPI';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(false);

  // const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  // console.log('location: ', location);
  // console.log('backLinkLocationRef: ', backLinkLocationRef);

  // const params = useParams();
  // console.log('params:', params);
  const { movieId } = useParams();

  useEffect(() => {
    setError(false);

    const fetchMovies = async () => {
      try {
        const response = await fetchMovieData(movieId);
        if (response.length === 0) setError(true);

        setMovieData(response);
      } catch (error) {
        setError(true);
        console.error(error.message);
        toast.error(
          'Oops! Something went wrong. Please, reload the page and try again.'
        );
      }
    };

    fetchMovies();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <div>
        {error && <h3>Oops...</h3>}
        {movieData && <h1>MovieDetails: {movieId}</h1>}</div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
