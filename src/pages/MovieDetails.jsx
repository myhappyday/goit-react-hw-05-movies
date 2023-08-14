import { Suspense, useState, useEffect, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMovieData } from '../services/fetchAPI';
import placeholder from '../images/no-image.png';
import Loader from '../components/Loader';

const API_IMG_URL = `https://image.tmdb.org/t/p/original`;

const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

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

  const {
    poster_path,
    title,
    name,
    vote_average,
    overview,
    genres,
    release_date,
  } = movieData;

  const getGenresMovies = genres => {
    if (genres) {
      return genres.map(genre => genre.name).join(', ');
    }
  };

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <div>
        {error && <h3>Oops...</h3>}
        {movieData && (
          <div>
            <img
              src={poster_path ? API_IMG_URL + poster_path : placeholder}
              alt={title ?? name}
              // loading="lazy"
              width="200"
              // height="300"
            />
            <h1>
              {title ?? name}
              {release_date && <span> ({parseInt(release_date)})</span>}
            </h1>
            <p>User score: {Math.round(vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{getGenresMovies(genres)}</p>
            <div>
              <h3>Additional information</h3>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
