import Task from "./Task";

const TaskList = ({tasks}) => {

    return (
        <div>
            <h1>Tasks</h1>
            {
                tasks.map( task => <Task 
                    key={task.id} 
                    task={task}
                />)
            }
        </div>
    );
};

export default TaskList;