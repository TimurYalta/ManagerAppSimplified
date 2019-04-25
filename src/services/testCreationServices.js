import {API_BASE_URL, AUTHORIZATION} from '../constants/Constants';
var HttpStatus = require('http-status-codes');

export const createTest = (name, token) => {
    return fetch(API_BASE_URL+'/tests',
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    title:name
                }
            ),
            headers: {'content-type': 'application/json', "Authorization":token}
        }
    )
    .then((response) => {
        console.log(response.status + " " + response.statusText);
        if (response.status == HttpStatus.OK) {
            return response.clone().json()
                .then((data) => {
                    console.log('test_id:'+data.test_id);
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

export const modifyTest = (testId, title, token) => {
    return fetch(API_BASE_URL+'tests/'+testId,
        {
            method: 'PUT',
            body: JSON.stringify({
                title: title
            }),
            headers: {'content-type': 'application/json', "Authorization":token}
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
    })
}

export const createQuestion = (testId, question, token) => {

    return fetch(API_BASE_URL+'/tests/'+testId+'/questions',
        {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {'content-type': 'application/json', "Authorization":token}
        }
    )
    .then((response) => {
        console.log(response.status + " " + response.statusText);
        if (response.status != HttpStatus.CREATED) {
            throw response;
        }
    })
    .catch((e) => {
        console.log(e);
    });
}

export const modifyQuestion = (testId, questionNumber, question, token) => {
    return fetch(API_BASE_URL+'/tests/'+testId+'/questions/'+questionNumber,
        {
            method: 'PUT',
            body: JSON.stringify(question),
            headers: {'content-type': 'application/json', "Authorization":token}
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

export const deleteQuestion = (testId, questionNumber, token) => {
    return fetch(API_BASE_URL+'/tests/'+testId+'/questions/'+questionNumber,
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
