import {API_BASE_URL} from '../constants/Constants';
var HttpStatus = require('http-status-codes');

export const getTests = () => {
    console.log(API_BASE_URL+'/tests');
    return fetch(API_BASE_URL+'/tests',
        {
            method: 'GET'
        }
    )
    .then((response) => {
        console.log(response.status + " " + response.statusText);
        if (response.status == HttpStatus.OK) {
            return response.json()
                .then((data) => {
                    console.log(data);
                    return data;
                });
        } else {
            throw response;
        }
    })
    .catch((e) => {
        console.log(e);
    });
}

export const deleteTest = (testId) => {
    return fetch(API_BASE_URL+'/tests/' + testId,
        {
            method: 'DELETE'
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

export const getQuestions = (testId) => {
    return fetch(API_BASE_URL+'/tests/'+testId+'/questions',
        {
            method: 'GET'
        }
    )
    .then((response) => {
        console.log(response.status + " " + response.statusText);
        if (response.status == HttpStatus.OK) {
            return response.clone().json()
                .then((data) => {
                    return data;
                });
        } else {
            throw response;
        }
    })
    .catch((e) => {
        console.log(e);
    });
}
