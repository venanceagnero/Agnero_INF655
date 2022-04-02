//import './App.css';
import React from 'react';
import Header from './pagepartials/header';
import Footer from './pagepartials/footer';
import Navigation from './pagepartials/navigation';
import AddTask from '../Tasksfolder/AddTask';
import SearchTask from '../Tasksfolder/searchTask';
import Tasks from '../Tasksfolder/Tasks';

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
        div className = "col-sm-8 col-lg-10" >
        <
        AddTask / > < Tasks / >
        <
        /div>{' '} <
        /div>{' '} <
        Footer / > { ' ' } <
        /div>{' '} <
        />
    );
}