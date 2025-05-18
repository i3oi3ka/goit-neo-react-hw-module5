import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../../api/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (query === "") return;
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!searchParams.get("query")) return;

    const getMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getSearchMovies(searchParams.get("query"));
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [searchParams]);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="query" placeholder="Enter search query" />
          <button type="submit">Search</button>
        </form>
      </div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        !isLoading &&
        searchParams.get("query") && <h3>Search request no results</h3>
      )}
    </div>
  );
};
export default MoviesPage;
