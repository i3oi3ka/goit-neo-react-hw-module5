import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetching = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setTrending(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetching();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {trending.length > 0 && <MovieList movies={trending} />}
    </div>
  );
};

export default HomePage;
