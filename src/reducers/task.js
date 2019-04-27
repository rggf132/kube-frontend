const initialState = {
    loading: false,
    error: null,
    tasks:[
        {
            "id":"961bfa41-f1db-4269-84ee-67d9b8c0d6d2",
            "title":"Do washing",
            "description":"Put washing into machine",
            "status":"in_progress",
            "insertDate":"2008-09-15T15:53:00"
        },
        {
            "id":"961bfa41-f1db-4269-84ee-67d9b8c0d6d3",
            "title":"Do washing",
            "description":"Put washing into machine",
            "status":"in_progress",
            "insertDate":"2008-09-15T15:53:00"
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TASKS':
            return {
                ...state,
                loading: true
            }
        case 'GET_TASKS_SUCCESS':
            console.log(action)
            return {
                ...state,
                tasks: action.response.data,
                loading: false
            }
        case 'GET_TASKS_FAILURE':
            return {
                ...state,
                error: action.error.message,
                loading: false
            }
        case 'EDIT_TASK':
            return {
                ...state,
                loading: true
            }
        case 'NEW_TASK':
            return {
                ...state,
                loading: true
            }
        case 'NEW_TASK_SUCCESS':
            console.log(action)
            return {
                ...state,
                tasks: [...state.tasks, action.response.data],
                loading: false
            }
        case 'NEW_TASK_FAILURE':
            return {
                ...state,
                error: action.error.message,
                loading: false
            }
        case 'DELETE_TASK':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_TASK_SUCCESS':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id),
                loading: true
            }
        case 'DELETE_TASK_FAILURE':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}