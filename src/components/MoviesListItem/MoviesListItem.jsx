import { useLocation } from 'react-router-dom'; // import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  ItemStyled,
  LinkStyled,
  ImageStyled,
  TitleStyled,
} from './MoviesListItem.styled';

import placeholder from '../../images/no-poster.png';

const API_IMG_URL = `https://image.tmdb.org/t/p/original`;

const MoviesListItem = ({ id, title, original_title, poster }) => {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'movies' : location.pathname;

  return (
    <ItemStyled>
      <LinkStyled to={`${currentPage}/${id}`} state={{ from: location }}>
        <ImageStyled
          src={poster ? API_IMG_URL + poster : placeholder}
          alt={title ?? original_title}
          loading="lazy"
          width="280"
          height="420"
        />
        <TitleStyled>{title ?? original_title}</TitleStyled>
      </LinkStyled>
    </ItemStyled>
  );
};

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  original_title: PropTypes.string,
  poster: PropTypes.string,
};

export default MoviesListItem;
