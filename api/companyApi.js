import axios from 'axios';
import { HEADER, ID } from '../constants/header';

export const loginCompany = ({body=null}) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/auth/loginEmployer";
        axios.post(REQUEST_URL,body)
            .then((response) => {
                resolve(response.data)
                console.log('erir',response)
            }).catch((err) => {
                console.log('gercek erir',err)
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

export const getEmployerById = ({_id = null, token=null}) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/employer/getEmployerById/" + _id;
        axios.get(REQUEST_URL, {
            headers:{token}
        })
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(null);
            })
    });
};


export const createCompany = ({body=null}) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/employer/createEmployer";
        axios.post(REQUEST_URL,body)
            .then((response) => {
                console.log(response)
                resolve(response)
            }).catch((err) => {
                resolve(null);
            })
    });
};

export const updateCompany = ({body=null,_id = null, token=null}) => {
    console.log(body);
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/employer/updateEmployer/" + _id;
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