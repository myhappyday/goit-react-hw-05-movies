import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMovieReviews } from '../../services/fetchAPI';
// import ImageErrorView from '../ImageErrorView';
// import imageError from '../../images/error-oops.jpg';
import { ListStyled, ItemStyled, Author, Text, Message } from './Reviews.styled'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setError(false);

    const fetchMovies = async () => {
      try {
        // setError(false);
        const response = await fetchMovieReviews(movieId);
        // if (response.length === 0) setError(true);

        setReviews(response);
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
      {/* {error && (
        <ImageErrorView
          imageURL={imageError}
          alt={'Something went wrong'}
          width="600"
          message={
            'Please, reload the page and try again.'
          }
        />
      )} */}     
      {!error && reviews && reviews.length > 0 ? (
        <ListStyled>
          {reviews.map(({ id, author, content }) => {
            return (
              <ItemStyled key={id}>
                <Author>{`Author: ${author}`}</Author>
                <Text>{content}</Text>
              </ItemStyled>
            );
          })}
        </ListStyled>
      ) : (
        <Message>We don't have any reviews for this movie</Message>
      )}
    </div>
  );
}; 

export default Reviews;
