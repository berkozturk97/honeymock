import * as types from '../types';

export function setUserData(data){
    return {
        type: types.SET_USER_DATA,
        payload: data
    }
} 