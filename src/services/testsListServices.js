import {API_BASE_URL} from '../constants/Constants';
var HttpStatus = require('http-status-codes');
const SECOND = 1000;

export const getTests = (token) => {
    return fetch(API_BASE_URL+'/tests',
        {
            method: 'GET',
            headers: {"Authorization":token}
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

export const deleteTest = (testId, token) => {
    return fetch(API_BASE_URL+'/tests/' + testId,
        {
            method: 'DELETE',
            headers: {"Authorization":token}
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

export const getQuestions = (testId,token) => {
    return fetch(API_BASE_URL+'/tests/'+testId+'/questions',
        {
            method: 'GET',
            headers: {"Authorization":token}
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
