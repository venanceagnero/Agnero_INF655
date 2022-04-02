import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import taskData from '../Tasksfolder/TaskData';

const TaskContext = createContext('');
export const TaskProvider = ({ children }) => {
    const [tasklist, setTasklist] = useState(taskData);
    const [edittask, setEditTask] = useState([{ task: {}, edit: false }]);

    //to add task
    const addTask = (newTask) => {
        newTask.id = uuidv4();
        setTasklist([newTask, ...tasklist]);
    };

    //to edit task
    const editTask = (task) => {
        setEditTask({ task, edit: true });
    };

    //to update task
    const updateTask = (id, updTask) => {
        setTasklist(
            tasklist.map((task) => (task.id === id ? {...task, ...updTask } : task))
        );
    };

    //to delete the task
    const deleteTask = (id) => {
        setTasklist(tasklist.filter((task) => task.id !== id));
    };

    //to check the task
    const checkTask = (id) => {
        setTasklist(
            tasklist.map((task) =>
                task.id === id ? {...task, chedked: !task.checked } : task
            )
        );
    };

    return ( <
        TaskContext.Provider value = {
            {
                tasklist,
                edittask,
                checkTask,
                deleteTask,
                addTask,
                editTask,
                updateTask,
            }
        } >
        { children } { ' ' } <
        /TaskContext.Provider>
    );
};

export default TaskContext;