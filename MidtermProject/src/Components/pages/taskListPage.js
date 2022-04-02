import React from 'react';
import Header from './pagepartials/header';
import Footer from './pagepartials/footer';
import Taskslist from '../Tasksfolder/taskslist';

export default function TaskListpage() {
    return ( <
        >
        <
        div className = "pagebody" > { ' ' } <
        Header / > { ' ' } <
        div className = "col" >
        <
        h3 className = "Title" > Tasks List < /h3> <Taskslist / >
        <
        /div>{' '} <
        Footer / >
        <
        /div>{' '} <
        />
    );
}