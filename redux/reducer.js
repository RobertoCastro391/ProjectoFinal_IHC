
import {SET_USER_NAME, TOGGLE_OPEN_MODEL}from "./types";

const initialState = {
    name: "martinha",
    booleanValue: false,
   
};

function useReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return {
                ...state,
                name: action.payload
            };
        case TOGGLE_OPEN_MODEL:
            return { 
                ...state, 
                booleanValue: !state.booleanValue 
            };
       

    }
}

export default useReducer;