import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_READ_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTVhMjkzNjk0MjljNDJlZWRhMDJhNDU1MDM2N2M2NyIsIm5iZiI6MTc0NzMzOTk2MS45OTQsInN1YiI6IjY4MjY0YWI5MjAzMzFlODE1ZGFkYTNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xlqyvvHEp-GM55Upibe7pBuEez3VJMazwwxV7KLEqZ4";
const params = {
  headers: { Authorization: `Bearer ${API_READ_TOKEN}` },
};

const getTrendingMovies = async () => {
  const data = await axios.get("trending/movie/day", params);
  return data;
};

const getMovieById = async (id) => {
  const data = await axios.get(`movie/${id}`, params);
  return data;
};

export { getTrendingMovies, getMovieById };
