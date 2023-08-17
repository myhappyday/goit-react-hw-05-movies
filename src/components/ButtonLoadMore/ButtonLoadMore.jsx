import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreBtn } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick} aria-label="Load more">
      Load more
    </LoadMoreBtn>
  );
};

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonLoadMore;