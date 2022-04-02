import React, { useContext, useState, useEffect } from 'react';
import Card from '../Shared/Card';
import TaskContext from '../context/taskcontext';

export default function AddTask({ AddingTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { addTask, edittask, updateTask } = useContext(TaskContext);

    useEffect(() => {
        if (edittask.edit === true) {
            setTitle(edittask.task.title);
            setDescription(edittask.task.description);
        }
    }, [edittask]);

    const ChangingTitle = (elmt) => {
        setTitle(elmt.target.value);
    };

    const ChangingDescription = (elmt) => {
        setDescription(elmt.target.value);
    };

    const SubmitTask = (elmt) => {
        elmt.preventDefault();
        if (title.length !== 0 && description.trim().length > 10) {
            const newTask = {
                title,
                description,
            };

            if (edittask.edit === true) {
                updateTask(edittask.task.id, newTask);
            } else {
                addTask(newTask);
            }

            // eslint-disable-next-line no-undef
            setTitle('');
            setDescription('');
        }
    };

    return ( <
        Card className = "card" >
        <
        form className = "inputForm"
        onSubmit = { SubmitTask } >
        <
        h5 className = "Title " > Add a task in the Task List < /h5>{' '} <
        div className = "inputField" >
        <
        input type = "text"
        className = "inputBox"
        placeholder = "Tast title"
        value = { title }
        onChange = { ChangingTitle }
        />{' '} <
        input type = "text"
        className = "inputBox"
        placeholder = "Task Description"
        value = { description }
        onChange = { ChangingDescription }
        />{' '} <
        div > { ' ' } <
        button className = "btn-default" > Add Task < /button>{' '} <
        /div>{' '} <
        /div>{' '} <
        /form>{' '} <
        /Card>
    );
}