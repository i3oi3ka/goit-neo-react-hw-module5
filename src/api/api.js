import axios from "axios";
import {
  transformMovieData,
  transformMoviesData,
  transformMovieCast,
  transformMovieReviews,
} from "../utils/transformMovie";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_READ_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTVhMjkzNjk0MjljNDJlZWRhMDJhNDU1MDM2N2M2NyIsIm5iZiI6MTc0NzMzOTk2MS45OTQsInN1YiI6IjY4MjY0YWI5MjAzMzFlODE1ZGFkYTNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xlqyvvHEp-GM55Upibe7pBuEez3VJMazwwxV7KLEqZ4";
const PARAMS = {
  headers: { Authorization: `Bearer ${API_READ_TOKEN}` },
};

const getTrendingMovies = async () => {
  const { data } = await axios.get("trending/movie/day", PARAMS);
  return transformMoviesData(data.results);
};

const getSearchMovies = async (query) => {
  const { data } = await axios.get(`search/movie?query=${query}`, PARAMS);
  return transformMoviesData(data.results);
};

const getMovieById = async (id) => {
  const { data } = await axios.get(`movie/${id}`, PARAMS);
  return transformMovieData(data);
};

const getMovieCast = async (id) => {
  const { data } = await axios.get(`movie/${id}/credits`, PARAMS);
  return transformMovieCast(data.cast);
};

const getMovieReviws = async (id) => {
  const { data } = await axios.get(`movie/${id}/reviews`, PARAMS);
  return transformMovieReviews(data.results);
};

export {
  getTrendingMovies,
  getMovieById,
  getMovieCast,
  getMovieReviws,
  getSearchMovies,
};
