import API_BASE_URL from '../constants/ActionTypes';
var HttpStatus = require('http-status-codes');

export const getTests = () => {
    fetch(API_BASE_URL+'/tests',
        {
            method: 'GET'
        }
    )
    .then((response) => {
        console.log(response.status + " " + response.statusText);
        if (response.status == HttpStatus.OK) {
            console.log(response.json());
            return response.json();
        } else {
            throw response;
        }
    })
    .catch((e) => {
        console.log(e);
    });
}

export const deleteTest = (testId) => {
    fetch(API_BASE_URL+'/tests/' + testId,
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
