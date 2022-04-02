import { useContext } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Shared/Card';
import TaskContext from '../context/taskcontext';

export default function Task({ Id, Title, Description, Checked, Task }) {
    const { deleteTask, checkTask, editTask } = useContext(TaskContext);

    return ( <
        Card >
        <
        input type = "checkbox"
        className = "checkitem"
        checked = { Checked }
        onChange = {
            () => checkTask(Id) }
        />{' '} <
        div style = { Checked ? { textDecoration: 'line-through' } : null }
        className = "text-display" >
        { Title } { ' ' } <
        /div>{' '} <
        div style = { Checked ? { textDecoration: 'line-through' } : null }
        className = "text-display" >
        { Description } { ' ' } <
        /div>{' '} <
        button onClick = {
            () => editTask(Task) }
        className = "editTask" >
        <
        FaEdit / >
        <
        /button>{' '} <
        button onClick = {
            () => deleteTask(Id) }
        className = "deleteIcone" >
        <
        FaTrashAlt / >
        <
        /button>{' '} <
        /Card>
    );
}

Task.propTypes = {
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Id: PropTypes.string.isRequired,
};