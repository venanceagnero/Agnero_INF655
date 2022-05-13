import { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Shared/Card';
import { Link } from 'react-router-dom';
import MovieContext from '../context/moviecontext';

export default function FavoriteMovie({
    id,
    movie_name,
    director,
    category,
    release_year,
    image,
    youtube_link,
    ratings,
}) {
    const { deleteMovie } = useContext(MovieContext);

    return ( <
        Card > { ' ' } {} { ' ' } <
        div className = "row" > { ' ' } <
        div className = "text-display col-sm-2 col-lg-8" >
        Movie name: { movie_name } { ' ' } <
        /div>{' '} <
        /div>{' '} <
        div className = "row" > { ' ' } <
        div className = "text-display col-sm-2 col-lg-8" >
        Director: { director } { ' ' } <
        /div>{' '} <
        /div>{' '} <
        div className = "row" >
        <
        div className = "text-display col-sm-2 col-lg-8" > { ' ' }
        Category: { category } { ' ' } <
        /div>{' '} <
        /div>{' '} <
        div className = "row" >
        <
        div className = "text-display col-sm-2 col-lg-8" >
        Year of release: { release_year } { ' ' } <
        /div>{' '} <
        /div>{' '} <
        div className = "row" > { ' ' } <
        div className = "text-display col-sm-2 col-lg-8" > Image: < /div>{' '} <
        div className = "MovieLogo col-sm-2 col-lg-8" > { ' ' } <
        img src = { image }
        alt = "movie logo"
        className = "M_Logo" / > { ' ' } <
        /div>{' '} <
        /div>{' '} <
        div className = "row" >
        <
        div className = "text-display col-sm-2 col-lg-8" >
        Youtube link: < Link to = { youtube_link } > movie traler < /Link>{' '} <
        /div>{' '} <
        /div>{' '} <
        div className = "row" > { ' ' } <
        div className = "text-display col-sm-2 col-lg-8" >
        Ratings: { ratings } { ' ' } <
        /div>{' '} <
        /div>{' '} <
        div > { ' ' } <
        button onClick = {
            () => deleteMovie(id) }
        className = "deleteIcone" >
        <
        FaTrashAlt / >
        <
        /button>{' '} <
        /div>{' '} <
        /Card>
    );
}

FavoriteMovie.propTypes = {
    id: PropTypes.string.isRequired,
    movie_name: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    release_year: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    youtube_link: PropTypes.string.isRequired,
    ratings: PropTypes.string.isRequired,
};
