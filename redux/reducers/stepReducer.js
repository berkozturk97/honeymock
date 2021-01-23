import * as types from '../types';

const initialState = {
    stepData: {

    } 
}

export const stepReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.ADD_DENEME:
            return {
                ...state,
                stepData: action.payload
            }

    
        default:
            return state;
    }
}