const initialState = {
  loading: false,
  error: null,
  user: {
    email: "ben.novak@gmail.com",
    password: "iambennovak"
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action);
      return {
        ...state,
        loading: true
      };
    case "LOGIN_SUCCESS":
      console.log(action);
      return {
        ...state,
        user: action.response.data,
        loading: false
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        error: action.error.message,
        loading: false
      };
    default:
      return state;
  }
};
