import axios from 'axios';
import { HEADER, ID } from '../constants/header';

export const loginTalent = ({body=null}) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/auth/loginTalent";
        axios.post(REQUEST_URL,body)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err);
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

export const getTalentById = () => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/talent/getTalentById/" + ID._id;
        axios.get(REQUEST_URL, {
            headers: axios.defaults.headers
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
            }).catch((err) => {
                reject(null);
            })
    });
};

export const updateTalent = ({body=null}) => {
    console.log(body);
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/talent/updateTalent/" + ID._id;
        axios.put(REQUEST_URL,body,{
            headers: axios.defaults.headers
        })
            .then((response) => {
                console.log(response)
                resolve(response.data)
            }).catch((err) => {
                console.log(err)
                reject(err);
            })
    });
};