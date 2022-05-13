
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './Components/context/moviecontext';
import PolicyPage from './Components/pages/policyPage';
import HomePage from './Components/pages/homePage';
//import Users from './Components/User/users';
import MovieListpage from './Components/pages/movieListPage';
import CreateMovieListpage from './Components/pages/createMovieListPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( <
        >
        <
        MovieProvider >
        <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < HomePage / > }
        />{' '} <
        Route path = "/policy"
        element = { < PolicyPage / > }
        />{' '} <
        Route path = "/createmovielist"
        element = { < CreateMovieListpage / > }
        />{' '} <
        Route path = "/movielist"
        element = { < MovieListpage / > }
        />{' '} <
        /Routes>{' '} <
        /BrowserRouter>{' '} <
        /MovieProvider>{' '} <
        />
    );
}

export default App;
