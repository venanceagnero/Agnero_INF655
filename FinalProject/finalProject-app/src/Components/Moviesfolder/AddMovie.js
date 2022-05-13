import React, { useContext, useState, useEffect } from 'react';
import Card from '../Shared/Card';
import MovieContext from '../context/moviecontext';

export default function AddMovie({ AddingMovie }) {
    const [movie_name, setMovie_name] = useState('');
    const [director, setDirector] = useState('');
    const [category, setCategory] = useState('');
    const [release_year, setRelease_year] = useState('');
    const [image, setImage] = useState('');
    const [youtube_link, setYoutube_link] = useState('');
    const [ratings, setRatings] = useState('');
    const { addMovie } = useContext(MovieContext);

    const ChangingMname = (elmt) => {
        setMovie_name(elmt.target.value);
    };

    const ChangingMdirector = (elmt) => {
        setDirector(elmt.target.value);
    };
    const ChangingMcategory = (elmt) => {
        setCategory(elmt.target.value);
    };
    const ChangingMReleaseYear = (elmt) => {
        setRelease_year(elmt.target.value);
    };
    const ChangingMimage = (elmt) => {
        setImage(elmt.target.value);
    };
    const ChangingMyoutubeLink = (elmt) => {
        setYoutube_link(elmt.target.value);
    };
    const ChangingMratings = (elmt) => {
        setRatings(elmt.target.value);
    };

    const SubmitMovie = (elmt) => {
        elmt.preventDefault();
        if (
            movie_name.length !== 0 &&
            director.length !== 0 &&
            category.length !== 0 &&
            release_year.length !== 0 &&
            image.length !== 0 &&
            youtube_link.length !== 0 &&
            ratings !== 0
        ) {
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

            setMovie_name('');
            setDirector('');
            setCategory('');
            setRelease_year('');
            setImage('');
            setYoutube_link('');
            setRatings('');
        }
    };

    return ( <
        Card className = "card" >
        <
        form className = "inputForm"
        onSubmit = { SubmitMovie } >
        <
        h6 className = "Title  " > Add a movie in your favorite movie list < /h6>{' '} <
        div className = "inputfield" >
        <
        div className = "row" >
        <
        input type = "text"
        className = "inputBox col-sm-1 col-lg-5"
        placeholder = "Movie name"
        value = { movie_name }
        onChange = { ChangingMname }
        />{' '} <
        input type = "text"
        className = "inputBox col-sm-1 col-lg-5"
        placeholder = "Movie director"
        value = { director }
        onChange = { ChangingMdirector }
        />{' '} <
        /div>{' '} <
        div className = "row" >
        <
        input type = "text"
        className = "inputBox col-sm-1 col-lg-5"
        placeholder = "Movie category"
        value = { category }
        onChange = { ChangingMcategory }
        />{' '} <
        input type = "text"
        className = "inputBox col-sm-1 col-lg-5"
        placeholder = "Movie year of release"
        value = { release_year }
        onChange = { ChangingMReleaseYear }
        />{' '} <
        /div>{' '} <
        div className = "row" >
        <
        input type = "file"
        className = "inputBox col-sm-1 col-lg-5"
        placeholder = "Movie Image"
        value = { image }
        onChange = { ChangingMimage }
        />{' '} <
        /div>{' '} <
        div className = "row" >
        <
        input type = "text"
        className = "inputBox col-sm-1 col-lg-5"
        placeholder = "Movie youtube link"
        value = { youtube_link }
        onChange = { ChangingMyoutubeLink }
        />{' '} <
        input type = "number"
        className = "inputBox col-sm-1 col-lg-5"
        placeholder = "Movie rating"
        value = { ratings }
        onChange = { ChangingMratings }
        />{' '} <
        /div>{' '} <
        /div>{' '} <
        div className = "addbtn" > { ' ' } <
        button className = "btn-default" > Add Movie < /button>{' '} <
        /div>{' '} <
        /form>{' '} <
        /Card>
    );
}
