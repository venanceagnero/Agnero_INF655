
import { useState, createContext, useEffect } from 'react';
const MovieContext = createContext('');

export const MovieProvider = ({ children }) => {
    const [movielist, setMovielist] = useState([]);
    const [favoritelist, setFavoritelist] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    //const [edittask, setEditTask] = useState([{ task: {}, edit: false }]);

    //fetch favorite movie  data
    const fetchFavoriteMovie = async() => {
        const f_response = await fetch(
            'http://localhost:5000/movies?_sort=id&order=desc'
        );
        const f_Moviedata = await f_response.json();
        setFavoritelist(f_Moviedata);
        setIsloading(false);
    };

    //fetch movie  data
    const fetchMovie = async() => {
        const response = await fetch(
            'http://localhost:5000/movies?_sort=id&order=desc'
            //    'https://api.themoviedb.org/3/movie/550?api_key=f59fbf34dce6f17d1647a0883e2c4038&sort=id&order=desc'
        );
        const Moviedata = await response.json();
        setMovielist(Moviedata);
        setIsloading(false);
    };

    //using useEffect
    useEffect(
        () => {
            fetchMovie();
            fetchFavoriteMovie();
        }, [], []
    );

    //to add movie
    const addMovie = async(newMovie) => {
        const response = await fetch('http://localhost:5000/movies', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newMovie),
        });

        const favoriteMoviedata = await response.json();

        setMovielist([favoriteMoviedata, ...favoritelist]);
    };

    //to edit task
    // const editTask = (task) => {
    //     setEditTask({ task, edit: true });
    // };

    //to update task
    // const updateTask = async(id, updTask) => {
    // const response = await fetch('http://localhost:5000/movies/$(id)', {
    //    method: 'PUT',
    //    headers: { 'Content-type': 'application/json' },
    //    body: JSON.stringify(updMovie),
    //   });
    // const Moviedata = await response.json();
    //     setTasklist(
    //         tasklist.map((task) => (task.id === id ? {...task, ...Moviedata } : task))
    //     );
    // };

    //to delete the movie
    const deleteMovie = async(id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            await fetch('http://localhost:5000/movies/${id}', { method: 'DELETE' });
            setFavoritelist(favoritelist.filter((movie) => movie.id !== id));
        }
    };

    //to check the movie
    const checkMovie = (id) => {
        setMovielist(
            movielist.map((movie) =>
                movie.id === id ? {...movie, chedked: !movie.checked } : movie
            )
        );
    };

    //to check the favorite movie
    const checkFavoriteMovie = (id) => {
        setFavoritelist(
            favoritelist.map((movie) =>
                movie.id === id ? {...movie, chedked: !movie.checked } : movie
            )
        );
    };

    return ( <
        MovieContext.Provider value = {
            {
                movielist,
                favoritelist,
                addMovie,
                checkMovie,
                checkFavoriteMovie,
                deleteMovie,
                isLoading,
            }
        } >
        { ' ' } { children } { ' ' } <
        /MovieContext.Provider>
    );
};

export default MovieContext;
