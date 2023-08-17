import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMovieCast } from '../../services/fetchAPI';
import ImageErrorView from '../ImageErrorView';
import imageError from '../../images/error-oops.jpg';
import {
  ListStyled,
  ItemStyled,
  ImageStyled,
  Name,
  Character,
  Message,
} from './Cast.styled';
import placeholder from '../../images/no-image.png';

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
        if (response.length === 0) setError(true);
        
        setCast(response);
      } catch (error) {
        setError(true);
        setCast(null)
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
      {error && cast === null && (
        <ImageErrorView
          imageURL={imageError}
          alt={'Something went wrong'}
          width="600"
          message={
            'Please, reload the page and try again.'
          }
        />
      )}
      {error && cast !== null && (
        <Message>
          We don't have information about the cast of this movie
        </Message>
      )}
      {!error && cast && cast.length > 0 && (
        <ListStyled>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <ItemStyled key={id}>
                <ImageStyled
                  src={profile_path ? API_IMG_URL + profile_path : placeholder}
                  alt={name}
                  loading="lazy"
                  width="120"
                />
                <Name>{name}</Name>
                <Character>{character}</Character>
              </ItemStyled>
            );
          })}
        </ListStyled>
      )}
    </div>
  );
};

export default Cast;
