// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  ItemStyled,
  LinkStyled,
  ImageStyled,
  TitleStyled,
} from './MoviesListItem.styled';

import placeholder from '../../images/no-poster.png';

const API_IMG_URL = `https://image.tmdb.org/t/p/original`;

const MoviesListItem = ({ id, title, name, poster }) => {
  return (
    <ItemStyled>
      <LinkStyled
        to={`movies/${id}`}
        //  state={{ from: location }}
      >
        <ImageStyled
          src={poster ? API_IMG_URL + poster : placeholder}
          alt={title ?? name}
          loading="lazy"
          width="280"
          height="420"
        />
        <TitleStyled>{title ?? name}</TitleStyled>
      </LinkStyled>
    </ItemStyled>
  );
};

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  poster: PropTypes.string,
};

export default MoviesListItem;
