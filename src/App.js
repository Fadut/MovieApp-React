import { Routes, Route, Link } from 'react-router-dom';
import HighestRatedMovieList from "./components/highestRatedMoviesList";
import PopularMoviesList from "./components/popularMoviesList";
import MovieImg from './assets/Image/movie_black2.jpg';
import Home from './components/home';
import SearchMovie from './components/searchMovie';
import SearchedMoviesList from './components/searchedMoviesList';
import UpcomingMovies from './components/upcomingMoviesList';
import './App.css';
import PopularTvSeriesList from './components/popularTvSeriesList';
import HighestRatedTvSeriesList from './components/highestRatedTvSeriesList';
import FavoritesPage from './components/favoritesPage';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {

  // Create a new QueryClient instance for favorites part
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <div className="jumbotron pb-3 pt-4">

      <span className='h1'>Movie Database <img className="rounded movie_img m-3" src={MovieImg} width="75" height="75" alt='Film roll'/></span>
      <span className="d-flex justify-content-between p-0">This small app demonstrates React, Redux-Toolkit, RTK Query and React-Router <SearchMovie/> </span>

        <div className="navbar navbar-expand-lg">
          <nav className="nav navbar-nav">    

            <Link to='/' className="nav-item nav-link">Home</Link>
            <Link to='/popular' className="nav-item nav-link">Popular</Link>
            <Link to='/highest-rated' className="nav-item nav-link">Highest Rated</Link>
            <Link to='/upcoming' className='nav-item nav-link'>Upcoming Movies</Link>
            <Link to='/popularTv' className='nav-item nav-link'>Popular Tv Series</Link>
            <Link to='/highest-rated-tv' className='nav-item nav-link'>Highest Rated Tv Series</Link>
            <Link to='/favorites' className='nav-item nav-link'>Favorites</Link>

          </nav>
        </div>

      </div>

        <Routes>
            <Route path='/' element={<Home/>} />  
            <Route path='/popular' element={<PopularMoviesList/>} />    
            <Route path='/highest-rated' element={<HighestRatedMovieList/>} />
            <Route path='/searchedMovie' element={<SearchedMoviesList/>} />
            <Route path='/upcoming' element={<UpcomingMovies/>} />
            <Route path='/popularTv' element={<PopularTvSeriesList/>} />
            <Route path='/highest-rated-tv' element={<HighestRatedTvSeriesList/>} />
            <Route path='/favorites' element={<FavoritesPage/>} />
        </Routes>

    </div>
    </QueryClientProvider>
  );    
}

export default App;
