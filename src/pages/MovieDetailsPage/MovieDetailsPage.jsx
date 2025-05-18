import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../../api/api";
import { useEffect, useRef, useState } from "react";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import style from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLink = useRef(location.state || "/movies");

  useEffect(() => {
    const fetching = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetching();
  }, [movieId]);

  return (
    <div>
      <GoBackBtn path={goBackLink.current} />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {movie && (
        <div>
          <div className={style.container}>
            <img src={movie.poster} alt={movie.title} width="240px" />
            <div>
              <h2>
                {movie.title} ({movie.release_year})
              </h2>
              <p>
                <b>User score:</b> {movie.vote}%
              </p>
              <p>
                <b>Overview:</b> {movie.overview}
              </p>
              <p>
                <b>Genres:</b> {movie.genres.join(", ")}
              </p>
            </div>
          </div>
          <hr />
          <div>
            <h3>Additional information</h3>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${style.link} ${style.active}` : style.link
              }
              to="cast"
            >
              Cast
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${style.link} ${style.active}` : style.link
              }
              to="reviews"
            >
              Reviews
            </NavLink>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
