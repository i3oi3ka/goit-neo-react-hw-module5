import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      try {
        const { data } = await getTrendingMovies();
        setTrending([...data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, []);
  console.log(trending);
  return (
    <section>
      <MovieList movies={trending} />
    </section>
  );
};

export default HomePage;
