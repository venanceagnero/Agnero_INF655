import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './Components/context/taskcontext';
import AboutPage from './Components/pages/aboutPage';
import HomePage from './Components/pages/homePage';
//import Users from './Components/User/users';
import TaskListpage from './Components/pages/taskListPage';
import Loginpage from './Components/pages/loginPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( <
        >
        <
        TaskProvider >
        <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < HomePage / > }
        />{' '} <
        Route path = "/about"
        element = { < AboutPage / > }
        />{' '} <
        Route path = "/login"
        element = { < Loginpage / > }
        />{' '} <
        Route path = "/tasklist"
        element = { < TaskListpage / > }
        />{' '} <
        /Routes>{' '} <
        /BrowserRouter>{' '} <
        /TaskProvider>{' '} <
        />
    );
}

export default App;