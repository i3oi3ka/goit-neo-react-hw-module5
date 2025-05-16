import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieItem movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
