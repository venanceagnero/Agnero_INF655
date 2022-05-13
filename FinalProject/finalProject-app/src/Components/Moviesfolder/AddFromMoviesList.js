
import React, { useContext, useState, useEffect } from 'react';
import Card from '../Shared/Card';
import MovieContext from '../context/moviecontext';

export default function AddFromMoviesList({ AddingMovie }) {
    const [movie_name, setMovie_name] = useState('');
    const [director, setDirector] = useState('');
    const [category, setCategory] = useState('');
    const [release_year, setRelease_year] = useState('');
    const [image, setImage] = useState('');
    const [youtube_link, setYoutube_link] = useState('');
    const [ratings, setRatings] = useState('');
    //const [CheckMovie, setCheckMovie] = useState('');
    const { addMovie, checkMovie } = useContext(MovieContext);

    const SubmitMovie = (elmt) => {
        elmt.preventDefault();
        if (checkMovie.id) {
            const newMovie = {
                movie_name,
                director,
                category,
                release_year,
                image,
                youtube_link,
                ratings,
            };

            addMovie(newMovie);

            // clear input

            // setCheckMovie('');
        }
    };

    return ( <
        Card className = "card" >
        <
        form className = "inputForm"
        onSubmit = { SubmitMovie } >
        <
        h6 > Adding selected to favorite list < /h6>{' '} <
        div className = "addbtn" >
        <
        button className = "btn-default " > Add to favorite < /button>{' '} <
        /div>{' '} <
        /form>{' '} <
        /Card>
    );
}
