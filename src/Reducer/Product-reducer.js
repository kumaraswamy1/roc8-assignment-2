
  export const  productReducer=(state, { type, payload }) =>{
    switch (type) {
      
      case "ADD_FILTERVALUE":
      return {
  ...state,
  [payload.category]: state[payload.category].includes(payload.value)
    ? state[payload.category].filter((value) => value !== payload.value)
    : [...state[payload.category], payload.value]
      };
      case "SORT":
        return {
          ...state, sortBy: payload
        }
      case "CLEAR_FILTERS":
        return {
      ...state,brand: [],
		size: [],
    idealFor: [],
    sortBy: null,
      }
      default:
        return state;
    }
  }