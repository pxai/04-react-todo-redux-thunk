import { createSelector } from 'reselect';

const selectTaskReducer = (state) => state.task;
export const selectSearchTerm = (state) => state.task.searchTerm;


export const selectTasks = createSelector(
    [selectTaskReducer],
    (task) => task.tasks
);

export const selectTaskCount = createSelector(
    [selectTaskReducer],
    (tasks) => tasks.length
);
