import { Suspense, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  // console.log('location: ', location);
  // console.log('backLinkLocationRef: ', backLinkLocationRef);

  // const params = useParams();
  // console.log('params:', params);
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запит, якщо потрібно
  // }, [])

  return (
    <>     
      <h1>MovieDetails: {movieId}</h1>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;