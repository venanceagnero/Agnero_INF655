import React from 'react';
import Header from './pagepartials/header';
import Footer from './pagepartials/footer';
import Card from '../Shared/Card';
import Users from '../User/users';

function AboutPage() {
    return ( <
        >
        <
        div className = "pagebody" >
        <
        Header / >
        <
        h3 className = "Title" > About User < /h3> <Users / >
        <
        br / > < br / > < br / > < br / > < br / > < br / > < br / > < br / > < br / > < br / > { ' ' } <
        br / > < br / >
        <
        Footer / >
        <
        /div>{' '} <
        />
    );
}

export default AboutPage;