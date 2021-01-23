import * as types from '../types';

export function addDeneme(data){
    return {
        type: types.ADD_DENEME,
        payload: data
    }
} 