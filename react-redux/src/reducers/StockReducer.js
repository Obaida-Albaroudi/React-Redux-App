import {
  Start,
  Succeeded,
} from "../actions"
  
  const initialState = {
    stock: [],
    isLoading: false,
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case Start:
        return {
          ...state,
          isLoading: true,
          error: ''
        };
      case Succeeded:
        return {
          ...state,
          isLoading: false,
          stock: action.payload,
          error: ''
        };
      default:
        return state;
    }
  };
  