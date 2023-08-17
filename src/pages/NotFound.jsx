import ImageErrorView from '../components/ImageErrorView';
import imageError from '../images/error-oops.jpg';

const NotFound = () => {
   return (
    <>
      <ImageErrorView
        imageURL={imageError}
        alt={'Something went wrong'}
        width="600"
        message={'Sorry, but the requested page does not exist.'}
      />      
    </>
  );
};

export default NotFound;