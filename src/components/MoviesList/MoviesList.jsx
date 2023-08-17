import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import MoviesListItem from '../MoviesListItem';
import { ListStyled } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <ListStyled>
      {movies.map(({ id, title, original_title, poster_path }) => (
        <MoviesListItem
          key={nanoid(5)}
          id={id}
          title={title}
          original_title={original_title}
          poster={poster_path}
        />
      ))}
    </ListStyled>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MoviesList;
