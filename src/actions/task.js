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