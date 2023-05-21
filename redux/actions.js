import {SET_USER_NAME, TOGGLE_OPEN_MODEL}from "./types";


export const setName = () => async (dispatch) => {
    try {
    dispatch({
        type: SET_USER_NAME,
        payload: name
    });

} catch (err) {
    console.log(err);
  }
    }
    ;

export const toggleOpenModel = () => async (dispatch) => {
    try {
    dispatch({
        type: TOGGLE_OPEN_MODEL,
        
    });

} catch (err) {
    console.log(err);
  }
    
};

