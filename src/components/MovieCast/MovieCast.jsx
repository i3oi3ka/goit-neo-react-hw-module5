import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/api";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <h3>error</h3>}
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              {profile_path && (
                <img src={profile_path} alt={name} width="200px" />
              )}
              <b>{name}</b>
              <p>{character}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && <p>No cast</p>
      )}
    </div>
  );
};

export default MovieCast;
