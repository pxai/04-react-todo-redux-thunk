import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTaskAsync, removeTaskAsync } from './store/task/task.actions';

const Task = ({task}) => {
    const [edit, setEdit] = useState(false);
    const [taskValue, setTaskValue] = useState(task.name);
    const dispatch = useDispatch();

    const handleEdit = () => {
        setEdit(true);
    };

    const setTask = (event) => {
        setTaskValue(event.target.value);
    };

    const updateTaskHandler = () => {
        dispatch(updateTaskAsync({...task, name: taskValue }));
        setEdit(false);
    }

    const deleteTaskHandler = () => {
        dispatch(removeTaskAsync(task.id));
    };

    return (
        edit ?
            <div>
                <input type="text" value={taskValue} onChange={setTask}/>
                <button onClick={updateTaskHandler}>Save</button>
            </div>
        :   <div>
                {task.id}
                {task.name}
                <button onClick={handleEdit}>Edit</button>
                <button onClick={deleteTaskHandler}>Delete</button>
            </div>
    )
};

export default Task;