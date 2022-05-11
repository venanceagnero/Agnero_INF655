
import { useState, useContext } from 'react';
import MovieContext from '../context/moviecontext';
import Spinner from '../Shared/spinner';
import Movie from './Movie';

export default function Movieslist() {
    const { movielist, isLoading } = useContext(MovieContext);
    const [search, setSearch] = useState('');

    const result = movielist.filter((movie) =>
        movie.movie_name.toLowerCase().includes(search.toLowerCase())
    );

    if (!isLoading && (!result || result.length === 0)) {
        return <p > No movie < /p>;
    }

    return isLoading ? ( <
        Spinner / >
    ) : ( <
        div > { ' ' } {
            result.map((movie) => ( <
                Movie key = { movie.id }
                id = { movie.id }
                movie_name = { movie.movie_name }
                director = { movie.director }
                category = { movie.category }
                release_year = { movie.release_year }
                image = { movie.image }
                youtube_link = { movie.youtube_link }
                ratings = { movie.ratings }
                movie = { movie }
                />
            ))
        } { ' ' } <
        /div>
    );
}
