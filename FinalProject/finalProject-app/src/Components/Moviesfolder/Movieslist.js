import { useState, useContext } from 'react';
import MovieContext from '../context/moviecontext';
import SearchMovie from './searchMovie';
import Spinner from '../Shared/spinner';
import Movie from './Movie';

export default function Movieslist() {
    const { movielist, isLoading } = useContext(MovieContext);
    const [search, setSearch] = useState('');

    const result = movielist.filter((movie) =>
        movie.movie_name.toLowerCase().includes(search.toLowerCase())
    );

    if (!isLoading && (!result || result.length === 0)) {
        return ( <
            > { ' ' } <
            SearchMovie search = { search }
            setSearch = { setSearch }
            />{' '} <
            p > No such movie found < /p>{' '} <
            />
        );
    }

    return isLoading ? ( <
        Spinner / >
    ) : ( <
        div > { ' ' } <
        SearchMovie search = { search }
        setSearch = { setSearch }
        />{' '} <
        h5 className = "Title" > Your favorite movies < /h5>{' '} {
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
