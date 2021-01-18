import axios from 'axios';

export const loginTalent = ({body=null}) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/auth/loginTalent";
        axios.post(REQUEST_URL,body)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(null);
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

export const createTalent = ({body=null}) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://honeypot-server.herokuapp.com/talent/createTalent";
        axios.post(REQUEST_URL,body,{
            headers: {
                'token': "16108922870918d187342fbbfb548b2b329629db4a2fe20c46e91"
            }
        })
            .then((response) => {
                console.log(response)
                resolve(response.data)
            }).catch((err) => {
                reject(null);
            })
    });
};