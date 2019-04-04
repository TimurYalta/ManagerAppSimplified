import { API_BASE_URL, AUTHORIZATION } from '../constants/Constants';
var HttpStatus = require('http-status-codes');
const SECOND = 1000;

export const getPrograms = (token) => {
    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve([
                {
                    id: 1,
                    title: 'asdasd'
                },
                {
                    id: 2,
                    title: '1234'
                }
            ]);
        }, SECOND)
    });
    // return fetch(API_BASE_URL+'/programs',
    // {
    //     method: 'GET',
    //     headers: { AUTHORIZATION: token }
    // })
    // .then((response) => {
    //     console.log(response.status + " " + response.statusText);
    //     if (response.status == HttpStatus.OK) {
    //         return response.clone().json()
    //             .then((data) => {
    //                 console.log('programs:'+data);
    //                 return data;
    //             });
    //     } else {
    //         throw response;
    //     }
    // })
    // .catch((e) => {
    //     console.log(e);
    // });
}

export const deleteProgram = (token, programId) => {
    return fetch(API_BASE_URL+'/programs/'+programId,
    {
        method: 'DELETE',
        headers: { AUTHORIZATION: token }
    })
    .then((response) => {
        console.log(response.status + " " + response.statusText);
        if (response.status != HttpStatus.OK) {
            throw response;
        }
    })
    .catch((e) => {
        console.log(e);
    });
}

export const getProgramData = (token, programId) => {
    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve({
                id: 1,
                title: 'asdasd',
                tests: [1,2,3]
            });
        }, SECOND)
    });
    // return fetch(API_BASE_URL+'/programs/'+programId,
    // {
    //     method: 'GET',
    //     headers: { AUTHORIZATION: token }
    // })
    // .then((response) => {
    //     console.log(response.status + " " + response.statusText);
    //     if (response.status == HttpStatus.OK) {
    //         return response.clone().json()
    //             .then((data) => {
    //                 console.log('programs:'+data);
    //                 return data;
    //             });
    //     } else {
    //         throw response;
    //     }
    // })
    // .catch((e) => {
    //     console.log(e);
    // });
}