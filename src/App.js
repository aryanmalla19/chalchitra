import logo from './logo.svg';
import s from './a.jpg'
import './App.css';
import { useState,useEffect } from 'react';
import MovieCard from './MovieCard';

const api = 'https://www.omdbapi.com/?i=tt3896198&apikey=e103874b'

function App() {
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

    
  const searchMovies = async (title) => {
    const respone = await fetch(`${api}&s=${title}`);
    const data = await respone.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Superman');
  }, []);
  return (
    <div className='app'>
      <h1>ChalChitra</h1>
      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm} onChange={(e) => {
         setSearchTerm(e.target.value)
        }} />
        <img src={logo} alt='Search' onClick={()=>{
          console.log(searchTerm)
          searchMovies(searchTerm)
        }} />
      </div>
      {
        movies.length>0
        ? (
          <div className='container'>
        {movies.map((movie)=>(
          <MovieCard movie={movie}/>
        ))}
      </div>
        )
        :
        (
          <div className='empty'>
            <h2>No movies found</h2>
            </div>
        )
      }
    </div>
      
  );
}

export default App;
