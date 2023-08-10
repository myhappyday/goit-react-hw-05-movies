import { useParams } from "react-router-dom";

const Cast = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return <div>Now showing movie with id - {movieId}</div>;
};

export default Cast;