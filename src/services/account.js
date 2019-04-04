import { API_BASE_URL, AUTHORIZATION } from '../constants/Constants';
var HttpStatus = require('http-status-codes');
const SECOND = 1000;

export const getUserData = (id) => {
    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve({
                id:1,
                name: "Bulat K.",
                role: "staff",
                email: "b.khabirov@innopolis.ru"
            });
        }, SECOND)
    });
    // let url = API_BASE_URL + '/users/';
    // if(id) {
    //     url += id;
    // } else {
    //     url += '/me';
    // }
    // return fetch(url,
    //     {
    //         method: 'GET'
    //     }
    // )
    // .then((response) => {
    //     console.log(response.status + " " + response.statusText);
    //     if (response.status == HttpStatus.OK) {
    //         return response.clone().json()
    //             .then((data) => {
    //                 console.log(data);
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

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve([
                {
                    id:1,
                    name: "Bulat",
                    role: "staff",
                    email: "b.khabirov@innopolis.ru"
                },
                {
                    id:2,
                    name: "Mikhail",
                    role: "candidate",
                    email: "idzeti@gmail.com"
                },
            ]);
        }, SECOND)
    });
    // return fetch(API_BASE_URL+"/users",
    //     {
    //         method: 'GET'
    //     }
    // )
    // .then((response) => {
    //     console.log(response.status + " " + response.statusText);
    //     if (response.status == HttpStatus.OK) {
    //         return response.clone().json()
    //             .then((data) => {
    //                 console.log(data);
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

export const registerUser = (name, role, email) => {
    return fetch(API_BASE_URL+'/users/new',
        {
            method: 'POST',
            body: {
                name: name,
                role: role,
                email: email
            },
            headers: {'content-type':'application/json'} 
        }
    )
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