import { TASKS_ACTION_TYPES } from './task.types';

const updateTaskFromTasks = (tasks, taskToUpdate) => {
    const filteredTasks = tasks.filter( task => task.id !== taskToUpdate.id);

    return [...filteredTasks, taskToUpdate];
}

export const initialTaskState = {
    isLoading: false,
    error: null,
    tasks: [],
    searchTerm: '',
}

export const taskReducer = (state = initialTaskState, action) => {
    const {type, payload} = action;
    console.log("Initial state: ", state, action)
    let changedTasks = null;
    switch (type) {
        case TASKS_ACTION_TYPES.SELECT_TASKS_START:
            return {
                ...state,
                isLoading: true
            };
        case TASKS_ACTION_TYPES.SELECT_TASKS_SUCCESS:
            return {
                ...state,
                tasks: payload,
                isLoading: false,
                error: null
            };
        case TASKS_ACTION_TYPES.SELECT_TASKS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        case TASKS_ACTION_TYPES.ADD_TASK_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case TASKS_ACTION_TYPES.ADD_TASK_SUCCESS:
            console.log("Reducer: ", [...state.tasks, payload])
            return {
                ...state,
                isLoading: false,
                error: null,
                tasks: [...state.tasks, payload],
            };
        case TASKS_ACTION_TYPES.ADD_TASK_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        case TASKS_ACTION_TYPES.UPDATE_TASK_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case TASKS_ACTION_TYPES.UPDATE_TASK_SUCCESS:
            changedTasks = updateTaskFromTasks(state.tasks, payload);
            return {
                ...state,
                tasks: changedTasks,
                isLoading: false,
            };
        case TASKS_ACTION_TYPES.UPDATE_TASK_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        case TASKS_ACTION_TYPES.REMOVE_TASK_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case TASKS_ACTION_TYPES.REMOVE_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tasks: state.tasks.filter(task => task.id !== payload.id)
            };
        case TASKS_ACTION_TYPES.REMOVE_TASK_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        case TASKS_ACTION_TYPES.SEARCH_TASK:
            return {
                ...state,
                searchTerm: payload,
            };
        default:
            return state;
    }
}

