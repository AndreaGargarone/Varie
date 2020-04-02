const isLoggedReducers = (state = false, action) => {
  switch (action.tipe) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

export default isLoggedReducers;
