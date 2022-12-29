import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTask } from './store/task/task.actions';

const TaskSearchForm = () => {
    const [taskValue, setTaskValue] = useState('');
    const dispatch = useDispatch();

    const onSearch = () => {
        dispatch(searchTask(taskValue));
    };

    const onReset = () => {
        setTaskValue('');
        dispatch(searchTask(''));
    };

    const handleSave = (e) => {
        setTaskValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={taskValue} onChange={handleSave} />
            <button onClick={onSearch}>Search for task</button>
            <button onClick={onReset}>Clear</button>
        </div>
    );
};

export default TaskSearchForm;