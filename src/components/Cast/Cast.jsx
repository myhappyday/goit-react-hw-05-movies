import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMovieCast } from '../../services/fetchAPI';
import placeholder from '../../images/no-actors.png';
const API_IMG_URL = `https://image.tmdb.org/t/p/w300/`;

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setError(false);

    const fetchMovies = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        // if (response.length === 0) setError(true);

        setCast(response);
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
      {error && <h3>Oops...</h3>}
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={profile_path ? API_IMG_URL + profile_path : placeholder}
                  alt={name}
                  loading="lazy"
                  width="120"
                />
                <h4>{name}</h4>
                <p>{`Character: ${character}`}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have information about the cast of this movie</p>
      )}
    </div>
  );
};

export default Cast;
