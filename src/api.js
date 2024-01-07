import axios from "axios"

const base_url = process.env.REACT_APP_BASEURL;
const api_key = process.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
  const movie = await axios.get(`${base_url}/movie/popular?page=1&api_key=${api_key}`);
  return movie.data.results;
}

export const searchMovie = async (q) => {
  const search = await axios.get(`${base_url}/search/movie?query=${q}&page=1&&api_key=${api_key}`);
  return search.data
}