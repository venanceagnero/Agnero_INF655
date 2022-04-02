import { useState, useContext } from 'react';
import TaskContext from '../context/taskcontext';
import SearchTask from './searchTask';
import Task from './Task';

export default function Taskslist() {
    const { tasklist } = useContext(TaskContext);
    const [search, setSearch] = useState('');

    const result = tasklist.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
    );

    if (!result || result.length === 0) {
        return <p > No Tasks < /p>;
    }

    return ( <
        div > { ' ' } {
            result.map((task) => ( <
                Task key = { task.id }
                Id = { task.id }
                Title = { task.title }
                Description = { task.description }
                Checked = { task.checked }
                Task = { task }
                />
            ))
        } { ' ' } <
        /div>
    );
}