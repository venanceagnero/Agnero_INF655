import React from 'react';
import { useState } from 'react';
import taskdata from './TaskData';
import Taskdatatype from './taskdatatype';

export default function Taskform({ handleAddTask }) {
    const [tasknumb, settasknumb] = useState(4);
    const [taskList, setTaskList] = useState(taskdata);
    const [title, setTitle] = useState('');

    //adding task to task list from input form
    function AddTask(mytask) {
        mytask.preventDefault();
        if (title) {
            const newTask = taskList.concat({ title });
            setTaskList(newTask);
            settasknumb((numb) => {
                return numb + 1;
            });
        }
        setTitle('');
    }

    //to make update from input form
    const handleSubmit = function addTodo(modifyTask) {
        setTitle(modifyTask.target.value);
    };

    return ( <
        div >
        <
        div > Number of Task: { tasknumb } < /div>{' '} {
            taskList.map((task) => ( <
                Taskdatatype title = { task.title }
                />
            ))
        } { ' ' } <
        form onSubmit = { AddTask } >
        <
        input type = "text"
        value = { title }
        placeholder = "Task"
        onChange = { handleSubmit }
        />{' '} <
        button > Submit < /button>{' '} <
        /form>{' '} <
        /div>
    );
}