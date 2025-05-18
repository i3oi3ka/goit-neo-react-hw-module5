const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const transformMoviesData = (data) => {
  return data.map(({ id, title }) => ({
    id,
    title,
  }));
};

const transformMovieData = (data) => {
  return {
    title: data.title,
    vote: Math.round(Number(data.vote_average) * 10),
    release_year: data.release_date.slice(0, 4),
    poster: IMAGE_BASE_URL + data.poster_path,
    overview: data.overview,
    genres: data.genres.map(({ name }) => name),
  };
};

const transformMovieCast = (data) => {
  return data.map(({ id, name, character, profile_path }) => ({
    id,
    name,
    character,
    profile_path:
      IMAGE_BASE_URL +
      (profile_path ? profile_path : "/1E5baAaEse26fej7uHcjOgEE2t2.jpg"),
  }));
};

const transformMovieReviews = (data) => {
  return data.map(({ id, author, content }) => ({
    id,
    author,
    content: content.replace(/<[^>]*>/g, ""),
  }));
};

export {
  transformMoviesData,
  transformMovieData,
  transformMovieCast,
  transformMovieReviews,
};
