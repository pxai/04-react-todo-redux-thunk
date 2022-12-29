import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskAsync } from './store/task/task.actions';

const TaskForm = ({}) => {
    const [taskValue, setTaskValue] = useState('');
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(addTaskAsync(taskValue));
    };

    const handleChange = (e) => {
        setTaskValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={taskValue} onChange={handleChange} />
            <button onClick={handleSave}>Create task</button>
        </div>
    );
};

export default TaskForm;