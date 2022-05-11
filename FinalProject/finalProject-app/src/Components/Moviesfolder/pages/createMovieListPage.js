
import React from 'react';
import Footer from './pagepartials/footer';
import Header from './pagepartials/header';
//import Userlogin from '../User/Userlogin';
import AddMovie from '../Moviesfolder/AddMovie';

export default function CreateMovieListpage() {
    return ( <
        > { ' ' } <
        div className = "pagebody" > { ' ' } <
        Header / > < AddMovie / >
        <
        Footer / >
        <
        /div>{' '} <
        />
    );
}
