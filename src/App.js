import { useEffect, useState } from 'react';
import './App.css';
import {getMovieList, searchMovie} from "./api";

const App = () => {

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    })
  }, [])

  console.log(popularMovies);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <h4 className="movie-title">{movie.title}</h4>
          <img className="movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
          <p className="movie-date">release: {movie.release_date}</p>
          <p className="movie-rate">{movie.vote_average}</p>
        </div>
      )
    })
  }

  const search = async (q) => {
    if (q.length > 3){
      const query = await searchMovie(q);
      setPopularMovies(query.results)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="nav-brand">TZT Movie</h1>
        <input 
          placeholder="Cari film kesayangan" 
          className="movie-search"
          onChange={({target}) => search(target.value)}
        />
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
