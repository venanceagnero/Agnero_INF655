
import React from 'react';
import Header from './pagepartials/header';
import Footer from './pagepartials/footer';
import Card from '../Shared/Card';

function PolicyPage() {
    return ( <
        >
        <
        div className = "pagebody" >
        <
        Header / >
        <
        h3 className = "Title" > Movie policy < /h3>{' '} <
        Card >
        <
        p > { ' ' }
        Our movie policy requires that all movie which must be added to the favorite list need be from our movie list.Any add which does not match to our movies will be removed form the app. { ' ' } <
        /p>{' '} <
        /Card>{' '} <
        Footer / >
        <
        /div>{' '} <
        />
    );
}

export default PolicyPage;
