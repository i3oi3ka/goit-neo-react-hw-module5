import { Link, useLocation } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const location = useLocation();
  return (
    <Link to={`/movies/${movie.id}`} state={location}>
      {movie.title}
    </Link>
  );
};

export default MovieItem;
