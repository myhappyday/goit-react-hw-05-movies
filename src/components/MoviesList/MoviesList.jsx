import PropTypes from 'prop-types';

import MoviesListItem from '../MoviesListItem';
import { ListStyled } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <ListStyled>
      {movies.map(({ id, title, name, poster_path }) => (
        <MoviesListItem
          key={id}
          id={id}
          title={title}
          name={name}
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
