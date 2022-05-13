
import React from 'react';
import Header from './pagepartials/header';
import Footer from './pagepartials/footer';
import Movieslist from '../Moviesfolder/Movieslist';

export default function MoviesListpage() {
    return ( <
        >
        <
        div className = "pagebody" > { ' ' } <
        Header / > { ' ' } <
        div className = "col" >
        <
        h3 className = "Title" > Movies List < /h3>{' '} <
        div className = "col-sm-2 col-lg-4" > { ' ' } <
        Movieslist / >
        <
        /div>{' '} <
        /div>{' '} <
        Footer / >
        <
        /div>{' '} <
        />
    );
}
