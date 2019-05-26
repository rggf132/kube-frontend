//Log in user

export const login = user => ({
  type: "LOGIN",
  payload: { user }
});

export const loginSuccess = response => ({
  type: "LOGIN_SUCCESS",
  response
});

export const loginFailure = error => ({
  type: "LOGIN_FAILURE",
  error
});
