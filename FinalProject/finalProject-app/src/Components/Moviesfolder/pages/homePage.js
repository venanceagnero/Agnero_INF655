//import './App.css';
import React from 'react';
import Header from './pagepartials/header';
import Footer from './pagepartials/footer';
import Navigation from './pagepartials/navigation';
//import AddMovie from '../Moviesfolder/AddMovie';
//import SearchMovie from '../Moviesfolder/searchMovie';
import FavoriteMovies from '../Moviesfolder/FavoriteMovies';
import Movieplay from '../Moviesfolder/Movieplay';

export default function HomePage() {
    //const [tasklist, setTasklist] = useState(taskData);
    // const [addingtask, setAddingTask] = useState('');
    return ( <
        >
        <
        div className = "pagebody" > { ' ' } <
        Header / >
        <
        div className = "row" >
        <
        div className = "col-sm-4 col-lg-2" > { ' ' } <
        Navigation / >
        <
        /div>{' '} <
        div className = "col-sm-4 col-lg-6" > { ' ' } <
        Movieplay / >
        <
        /div>{' '} <
        div className = "col-sm-4 col-lg-4" >
        <
        FavoriteMovies / >
        <
        /div>{' '} <
        /div>{' '} <
        Footer / > { ' ' } <
        /div>{' '} <
        />
    );
}
