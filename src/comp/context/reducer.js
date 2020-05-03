const siteReducer = (state, action) => {
  console.log("action in reducer", action);

  switch (action.type) {
    case "TOGGLE_SITE":
      console.log("toggle site  called...");

      const newState = state.map((data) => {
        if (data.name === action.value.name) {
          data.value = action.value.value;
        }
        return data;
      });
      return [...newState];

    default:
      return [...state];
  }
};

export default siteReducer;
