import { BiArrowBack } from 'react-icons/bi';
import { BtnLink } from './BackLink.styled';
import PropTypes from 'prop-types';

const BackLink = ({ path }) => {
  return (
    <BtnLink to={path}>
      <BiArrowBack />
      Go back
    </BtnLink>
  );
};

BackLink.propTypes = {
  path: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default BackLink;
