import { useParams } from "react-router-dom";
import { getMovieById } from "../../api/api";
import { useEffect, useState } from "react";
import { getImageURL } from "../../utils/imageUrl";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    const fetching = async () => {
      try {
        const { data } = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, [movieId]);
  console.log(movie);

  return (
    <div>
      {movie && (
        <div>
          <img src={getImageURL(movie.poster_path)} alt={movie.title}></img>
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>User score: {movie.popularity}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
