const initial_state = {
  email: "",
  password: "",
  user: null,
  error: "",
  loading: false
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case "EMAIL_CHANGED":
      return { ...state, email: action.payload };
    case "PASSWORD_CHANGED":
      return { ...state, password: action.payload };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        ...initial_state,
        user: action.payload
      };
    case "LOGIN_USER_FAIL":
      return { ...state, error: "Authentication Failed", loading: false };
    case "LOGIN_USER":
      return { ...state, loading: true, error: "" };
    default:
      return state;
  }
};
