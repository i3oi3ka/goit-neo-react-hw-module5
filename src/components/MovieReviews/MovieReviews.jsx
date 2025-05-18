import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviws } from "../../api/api";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieReviws(movieId);
        setReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <h3>error</h3>}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <b>Author:</b> {author}
              </p>
              <p>
                <b>Content:</b> {content}{" "}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && <p>No reviews</p>
      )}
    </div>
  );
};

export default MovieReviews;
