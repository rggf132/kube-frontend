//Get Tasks

export const getTask = () => ({
    type: 'GET_TASK'
})

export const getTaskSuccess = (response) => ({
    type: 'GET_TASK_SUCCESS',
    response
})

export const getTaskFailure = (error) => ({
    type: 'GET_TASK_FAILURE',
    error
})

//New Task

export const newTask = (task) => ({
    type: 'NEW_TASK',
    payload: {task}
})

//Edit Task

export const editTask = (task) => ({
    type: 'EDIT_TASK',
    payload: {task}
})

//Delete Task

export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: {id}
})