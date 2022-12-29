import { TASKS_ACTION_TYPES } from './task.types';
import axios from 'axios';
import { createAction } from '../../utils/reducer/reducer.utils';

export const selectTasksStart = () => {
    return createAction(TASKS_ACTION_TYPES.SELECT_TASKS_START);
};

export const selectTasksSuccess = (tasks) => {
    return createAction(TASKS_ACTION_TYPES.SELECT_TASKS_SUCCESS, tasks);
};

export const selectTasksError = (error) => {
    return createAction(TASKS_ACTION_TYPES.SELECT_TASKS_ERROR, error);
};

export const addTaskStart = () => {
    return createAction(TASKS_ACTION_TYPES.ADD_TASK_START);
};

export const addTaskSuccess = (task) => {
    return createAction(TASKS_ACTION_TYPES.ADD_TASK_SUCCESS, task);
};

export const addTaskError = (error) => {
    return createAction(TASKS_ACTION_TYPES.ADD_TASK_ERROR, error);
};

export const removeTaskStart = () => {
    return createAction(TASKS_ACTION_TYPES.REMOVE_TASK_START);
};

export const removeTaskSuccess = (id) => {
    return createAction(TASKS_ACTION_TYPES.REMOVE_TASK_SUCCESS, id);
};

export const removeTaskError = (error) => {
    return createAction(TASKS_ACTION_TYPES.REMOVE_TASK_ERROR, error);
};

export const updateTaskStart = () => {
    return createAction(TASKS_ACTION_TYPES.UPDATE_TASK_START);
};

export const updateTaskSuccess = (task) => {
    return createAction(TASKS_ACTION_TYPES.UPDATE_TASK_SUCCESS, task);
};

export const updateTaskError = (error) => {
    return createAction(TASKS_ACTION_TYPES.UPDATE_TASK_ERROR, error);
};

export const searchTask = (name) => {
    return createAction(TASKS_ACTION_TYPES.SEARCH_TASK, name);
};

export const selectTasksAsync =  () => async (dispatch) => {
    dispatch(selectTasksStart());
    try {
        const response = await axios.get('/api/tasks');
        dispatch(selectTasksSuccess(response.data));
    } catch (error) {
        dispatch(selectTasksError(error))
    }
};

export const addTaskAsync = (name) => async (dispatch) => {
    dispatch(addTaskStart());
    try {
        const response = await axios.post('/api/tasks', {name})
        dispatch(addTaskSuccess(response.data));
    } catch (error) {
        dispatch(addTaskError(error));
    }
}

export const removeTaskAsync = (id) => async (dispatch) => {
    dispatch(removeTaskStart());
    try {
        console.log("About to send ID: ", id)
        const response = await axios.delete(`/api/tasks/${id}`);
        dispatch(removeTaskSuccess(response.data))
    } catch (error) {
        dispatch(removeTaskError(error));
    }
} 

export const updateTaskAsync = (task) => async (dispatch) => {
    dispatch(updateTaskStart(task));
    try {
        const response = await axios.put('/api/tasks', {...task});
        dispatch(updateTaskSuccess(response.data));
    } catch (error) {
        dispatch(updateTaskError(error));
    }
}