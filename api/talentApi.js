import axios from 'axios';
import { HEADER, ID } from '../constants/header';

export const loginTalent = ({body=null}) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/auth/loginTalent";
        axios.post(REQUEST_URL,body)
            .then((response) => {
                resolve(response.data)
            }).catch((response) => {
                console.log('gercek erir',response)
                resolve(null);
            })
    });
};

export const getTalents = (token) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/talent/getTalents";
        axios.get(REQUEST_URL, {
            headers: {
                'token': token
            }
        })
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(null);
            })
    });
};

export const getTalentById = ({_id = null, token=null}) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/talent/getTalentById/" + _id;
        axios.get(REQUEST_URL, {
            headers: {token}
        })
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(null);
            })
    });
};


export const createTalent = ({body=null}) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/talent/createTalent";
        axios.post(REQUEST_URL,body)
            .then((response) => {
                console.log(response)
                resolve(response)
            }).catch((response) => {
                resolve(response);
            })
    });
};

export const updateTalent = ({body=null,_id = null, token=null}) => {
    console.log(body);
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/talent/updateTalent/" + _id;
        axios.put(REQUEST_URL,body,{
            headers: {token}
        })
            .then((response) => {
                console.log(response)
                resolve(response.data)
            }).catch((response) => {
                
                resolve(null);
            })
    });
};