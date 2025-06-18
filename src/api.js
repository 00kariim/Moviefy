import axios from "axios";

const API_KEY = "1a58ea3f5202aabc008213ecfea294d2";
const BASE_URL = "https://api.themoviedb.org/3";




export const getPopularMovies = async () => {
  console.log("fetching...");
  const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-EN`);
  return res.data.results;
};

export const getTopRatedMovies = async () => {
  console.log("fetching...");

  const res = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-EN`);
  return res.data.results;
};

export const getUpcomingMovies = async () => {
  console.log("fetching...");

  const res = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-EN`);
  return res.data.results;
};

export const searchMovies = async (query) => {
  const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-EN`);
  return res.data.results;
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-EN`);
  return res.data;
};
