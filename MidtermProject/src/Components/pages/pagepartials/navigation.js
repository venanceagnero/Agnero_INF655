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
        Link to = "/about" > About < /Link>{' '} <
        /div>{' '} <
        /div>{' '} <
        div className = "nav-link" >
        <
        div className = "Link" >
        <
        Link to = "/login" > Login < /Link>{' '} <
        /div>{' '} <
        /div>{' '} <
        div className = "nav-link" > { ' ' } <
        div className = "Link" > { ' ' } <
        Link to = "/tasklist" > Tasks List < /Link>{' '} <
        /div>{' '} <
        /div>{' '} <
        />
    );
}