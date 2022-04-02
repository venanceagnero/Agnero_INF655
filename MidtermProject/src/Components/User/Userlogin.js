import React from 'react';
import Card from '../Shared/Card';
import { useState } from 'react';
import Users from './users';

export default function Userlogin() {
    const [Login, setLogin] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return ( <
        Card className = "card" > { ' ' } <
        div > { ' ' } <
        h3 className = "Title" > User Login < /h3>{' '} <
        /div>{' '}; { ' ' } <
        div >
        <
        form className = "inputForm" >
        <
        div className = "inputField" >
        <
        input type = "text"
        placeholder = "Username"
        className = "inputBox" / >
        <
        /div>{' '} <
        div className = "inputField" >
        <
        input type = "text"
        placeholder = "Password"
        className = "inputBox" / > { ' ' } <
        /div>{' '} <
        div className = "inputBtn" > { ' ' } <
        button className = "btn-default" > Login < /button>{' '} <
        /div>{' '} <
        /form>{' '} <
        /div>{' '} <
        /Card>
    );
}
