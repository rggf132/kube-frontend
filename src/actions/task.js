//Get Tasks

export const getTasks = () => ({
    type: 'GET_TASKS'
})

export const getTasksSuccess = (response) => ({
    type: 'GET_TASKS_SUCCESS',
    response
})

export const getTasksFailure = (error) => ({
    type: 'GET_TASKS_FAILURE',
    error
})

//New Task

export const newTask = (task) => ({
    type: 'NEW_TASK',
    payload: {task}
})

export const newTaskSuccess = (response) => ({
    type: 'NEW_TASK_SUCCESS',
    response
})

export const newTaskFailure = (error) => ({
    type: 'NEW_TASK_FAILURE',
    error
})

//Edit Task

export const editTask = (id, updateTask) => ({
    type: 'EDIT_TASK',
    payload: {id, updateTask}
})

export const editTaskSuccess = (response) => ({
    type: 'EDIT_TASK_SUCCESS',
    response
})

export const editTaskFailure = (error) => ({
    type: 'EDIT_TASK_FAILURE',
    error
})

//Delete Task

export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: {id}
})

export const deleteTaskSuccess = (response, id) => ({
    type: 'DELETE_TASK_SUCCESS',
    response,
    id
})

export const deleteTaskFailure = (error) => ({
    type: 'DELETE_TASK_FAILURE',
    error
})