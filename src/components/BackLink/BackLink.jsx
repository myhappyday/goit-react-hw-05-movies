import { BiArrowBack } from 'react-icons/bi';
import { BtnLink } from './BackLink.styled';
import PropTypes from 'prop-types';

const BackLink = ({ patch }) => {
  return (
    <BtnLink to={patch}>
      <BiArrowBack />
      Go back
    </BtnLink>
  );
};

BackLink.propTypes = {
  path: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default BackLink;
