import { API_BASE_URL, AUTHORIZATION } from '../constants/Constants';
var HttpStatus = require('http-status-codes');
const SECOND = 1000;

export const getApplications = (status, candidate) => {
    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve([
                {
                    id: 1,
                    program: {id:1, title:"CS Bachelor"},
                    candidate: {id:1, name:"Mikhail Fadeev"},
                    status : {
                        type: "rejected",
                        changed: 12345678,
                        reason: "Tupoi",
                        fixable: false
                    }
                },
                {
                    id: 2,
                    program: {id:1, title:"CS Bachelor"},
                    candidate: {id:1, name:"Mikhail Fadeev"},
                    status : {
                        type: "initial",
                        changed: 12345678
                    }
                },
                {
                    id: 3,
                    program: {id:1, title:"CS Bachelor"},
                    candidate: {id:1, name:"Mikhail Fadeev"},
                    status : {
                        type: "review",
                        changed: 12345678
                    }
                },
                {
                    id: 4,
                    program: {id:1, title:"CS Bachelor"},
                    candidate: {id:1, name:"Mikhail Fadeev"},
                    status : {
                        type: "interview",
                        changed: 12345678,
                        date: 13245678,
                        interviewew: 1
                    }
                }
            ]);
        }, SECOND)
    });
    // let url = API_BASE_URL+'/applications';
    // url = setFilters(url, status, candidate);
    // return fetch(url, 
    //     {
    //         method: 'GET',
    //     }
    // )
    // .then((response) => {
    //     console.log(response.status + " " + response.statusText);
    //     if (response.status == HttpStatus.OK) {
    //         return response.clone().json()
    //             .then((data) => {
    //                 console.log(data);
    //                 return data;
    //             })
    //     } else {
    //         throw response;
    //     }
    // })
    // .catch((e) => {
    //     console.log(e);
    // });
}

export const getApplication = (id) => {
    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve({
                id: 1,
                test_attempts: [
                    {
                        id: 1,
                        test_id:2,
                        grade: 14.5
                    },
                    {
                        id: 2,
                        test_id:3,
                        grade: 74.5
                    }
                ],
                candidate: {
                    id: 1,
                    name: "Mikhail Fadeev"
                },
                history:[
                    {
                        type: "initial",
                        changed: 12345678
                    },
                    {
                        type: "accepted",
                        changed: 12345678,
                        interviewer:21342,
                        comment:'loh',
                        reason: "Tupoi",
                        fixable: false
                    }
                ]
            });
        }, SECOND)
    });
    // return fetch(API_BASE_URL+'/applications/'+id, 
    //     {
    //         method: 'GET',
    //     }
    // )
    // .then((response) => {
    //     console.log(response.status + " " + response.statusText);
    //     if (response.status == HttpStatus.OK) {
    //         return response.clone().json()
    //             .then((data) => {
    //                 console.log(data);
    //                 return data;
    //             })
    //     } else {
    //         throw response;
    //     }
    // })
    // .catch((e) => {
    //     console.log(e);
    // });
}

export const updateApplicationStatus = (status, id) => {
    return fetch(API_BASE_URL+'/applications/'+id, 
        {
            method: 'PUT',
            body: JSON.stringify(status),
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

function setFilters(url, status, candidate) {
    const params = new URLSearchParams();
    if (status) {
        params.append('status', status);
    }
    if (candidate) {
        params.append('candidate', candidate);
    }
    if (status || candidate) {
        url += '?' + params.toString();
    }
    return url;
}