import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard'


const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // Verifes who's trying to make request (username)
    Authorization: `Bearer ${API_KEY}`
  }
}

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // Debounce searchTerm updates to avoid rapid API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Create a state to display errors
  const [errorMessage, setErrorMessage] = useState('');

  const fetchMovies = async (query = '') => {

    setIsLoading(true);

    try {
      // Define endpoint (sort desc popu.)
      const endpoint = query
      ?  `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      // Get data (using fetch)
      const response = await fetch(endpoint, API_OPTIONS);
         
      // throw new Error('Failed to fetch new movies')

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();

      if (data.response == 'False') {
        setErrorMessage(data.Error || 'Failed to fetch Movies ')
        setMovieList([]);
        return;
      } 

      setMovieList(data.results || [])

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage(error.message || 'Failed to fetch movies');
    } finally {
        setIsLoading(false);
        // setIsLoading(true);
    }
  }

  // gets load at start
  useEffect( () => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span>You'll Enjoy without the Hassle</h1>
          {/* State fields can be passed as props. [properties] */}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />    
          </header>

          <section className='all-movies'>
          <h2 className='mt-[40px]'>All Movies</h2>

          {isLoading ? (
            // <p className='text-white'>Loading...</p>
            <Spinner />
          ) : errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                // <p key={movie.id} className='text-white'>{movie.title}</p>
                <MovieCard key={movie.id} movie={movie} />
              ))} 
            </ul>
          )}
          // {/* {errorMessage && <p className='text-red-500 error-message'>{errorMessage}</p>} */}

          // <h1 className='text-white'>{searchTerm}</h1>
        </section> 
        </div>
      </div>
    </main>
  )
}

export default App