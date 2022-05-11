
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return ( <
        >
        <
        div className = "nav-link" >
        <
        div className = "Link" > { ' ' } <
        Link to = "/" > Home < /Link>{' '} <
        /div>{' '} <
        /div>{' '} <
        div className = "nav-link" >
        <
        div className = "Link" >
        <
        Link to = "/movielist" > Movies List < /Link>{' '} <
        /div>{' '} <
        /div>{' '} <
        div className = "nav-link" >
        <
        div className = "Link" >
        <
        Link to = "/createmovielist" > Create movie list < /Link>{' '} <
        /div>{' '} <
        /div>{' '} <
        div className = "nav-link" > { ' ' } <
        div className = "Link" > { ' ' } <
        Link to = "/policy" > Policy < /Link>{' '} <
        /div>{' '} <
        /div>{' '} <
        />
    );
}
