import { useParams } from "react-router-dom";

const Reviews = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return <div>Now showing reviews with id - {movieId}</div>;
};

export default Reviews;