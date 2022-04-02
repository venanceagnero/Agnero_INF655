import './App.css';
import taskdata from './Component/TaskData';
import { useState } from 'react';
import Taskform from './Component/TaskForm';

function App() {
    // const [TaskList, setTaskList] = useState(taskdata); taskdata={TaskList}

    return ( <
        div className = "App" >
        <
        h3 > Welcome to Tasks list < /h3> <Taskform / > { ' ' } <
        /div>
    );
}

export default App;