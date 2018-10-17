const initial_state = {};

export default (state = initial_state, action) => {
  switch (action.type) {
    case "EMPLOYEES_FETCH_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
