export const reducerNav = (state, action) => {
  switch (action.type) {
    case "CLICK":
      return {
        ...state,
        id: action.payload.id,
        key: action.payload.key,
      };

    default:
      return state;
  }
};
