const propertyReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_MEALS":
      return action.payload;
    default:
      return state;
  }
};
export default propertyReducer;
