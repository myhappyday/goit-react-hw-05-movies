import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMovieData } from '../services/fetchAPI';
import BackLink from '../components/BackLink';
import MovieData from '../components/MovieData';
import ImageErrorView from '../components/ImageErrorView';
import imageError from '../images/error-oops.jpg';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState();
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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
    <div>
      <BackLink path={backLinkLocationRef.current} />     
      {!error && movieData && <MovieData movieData={movieData} />}
      {error && (
        <ImageErrorView
          imageURL={imageError}
          alt={'Something went wrong'}
          width="600"
          message={
            'Please, reload the page and try again.'
          }
        />
      )}      
    </div>
  );
};

export default MovieDetails;
