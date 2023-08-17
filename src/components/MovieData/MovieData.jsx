import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import placeholder from '../../images/no-poster.png';
import {
  ImageStyled,
  Wrapper,
  TextWrapper,
  Title,
  SubTitle,
  Text,
  AdditionalInfo,
  NavList,
  NavLinkStyled,
} from './MovieData.styled';

const API_IMG_URL = `https://image.tmdb.org/t/p/original`;

const MovieData = ({ movieData }) => {
  const {
    poster_path,
    title,
    original_title,
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
      <Wrapper>
        <ImageStyled
          src={poster_path ? API_IMG_URL + poster_path : placeholder}
          alt={title ?? original_title}
          width="300"
          height="auto"
        />
        <TextWrapper>
          <Title>
            {title ?? original_title}
            {release_date && <span> ({parseInt(release_date)})</span>}
          </Title>
          <Text>User score: {Math.round(vote_average * 10)}%</Text>
          <SubTitle>Overview</SubTitle>
          <Text>{overview}</Text>
          <SubTitle>Genres</SubTitle>
          <Text>{getGenresMovies(genres)}</Text>
        </TextWrapper>
      </Wrapper>
      <AdditionalInfo>
        <SubTitle>Additional information</SubTitle>
        <NavList>
          <li>
            <NavLinkStyled to="cast">Cast</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="reviews">Reviews</NavLinkStyled>
          </li>
        </NavList>
      </AdditionalInfo>
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
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};

export default MovieData;
