
import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaHouseUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return ( <
        div className = "footer" > { ' ' } <
        div className = "links" > { ' ' } <
        FaFacebook size = "30" / >
        <
        /div>{' '} <
        div className = "links" > { ' ' } <
        FaTwitter size = "30" / >
        <
        /div>{' '} <
        div className = "links" > { ' ' } <
        FaInstagram size = "30" / >
        <
        /div>{' '} <
        div className = "links" >
        <
        FaLinkedin size = "30" / > { ' ' } <
        /div>{' '} <
        div className = "links" >
        <
        Link to = "/"
        style = {
            { color: 'white' } } >
        <
        FaHouseUser size = "30" / >
        <
        /Link>{' '} <
        /div>{' '} <
        /div>
    );
}
