import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaInfoCircle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return ( <
        div className = "footer" > { ' ' } <
        h4 > Get connected to our social meddia network < /h4> <
        div className = "links" > { ' ' } <
        FaFacebook size = "30" / >
        <
        /div> <
        div className = "links" > { ' ' } <
        FaTwitter size = "30" / >
        <
        /div> <
        div className = "links" > { ' ' } <
        FaInstagram size = "30" / >
        <
        /div> <
        div className = "links" >
        <
        FaLinkedin size = "30" / > { ' ' } <
        /div> <
        div className = "links" >
        <
        Link to = "/"
        style = {
            { color: 'white' } } >
        <
        FaInfoCircle size = "30" / >
        <
        /Link> <
        /div>{' '} <
        /div>
    );
}