import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import placeholder from '../../images/no-image.png';

const API_IMG_URL = `https://image.tmdb.org/t/p/original`;

const MovieData = ({ movieData }) => {
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

MovieData.propTypes = {
  movieData: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    release_date: PropTypes.string,
  }),
};

export default MovieData;
