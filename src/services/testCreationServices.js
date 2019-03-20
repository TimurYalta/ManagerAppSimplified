import API_BASE_URL from '../constants/ActionTypes';
var HttpStatus = require('http-status-codes');

export const createTest = (name) => {
    return fetch(API_BASE_URL+'/tests', 
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    title:name
                }
            ),
            headers: {'content-type': 'application/json'}
        }
    )
    .then((response) => {
        console.log(response.status + " " + response.statusText);
        if (response.status == HttpStatus.CREATED) {
            return response.json()
                .then((data) => {
                    console.log('test_id:'+data.id);
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

export const modifyTest = (testId, title) => {
    return fetch(API_BASE_URL+'tests/'+testId,
        {
            method: 'PUT',
            body: JSON.stringify({
                title: title
            }),
            headers: {'content-type': 'application/json'}
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

export const getQuestions = (testId) => {
    return fetch(API_BASE_URL+'/tests/'+testId+'/questions',
        {
            method: 'GET'
        }
    )
    .then((response) => {
        console.log(response.status + " " + response.statusText);
        if (response.status == HttpStatus.OK) {
            console.log(response.json());
            return response.json()
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

export const createQuestion = (testId, question) => {
    return fetch(API_BASE_URL+'/tests/'+testId+'/questions',
        {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {'content-type': 'application/json'}
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

export const modifyQuestion = (testId, questionNumber, question) => {
    return fetch(API_BASE_URL+'/tests/'+testId+'/questions/'+questionNumber,
        {
            method: 'PUT',
            body: JSON.stringify(question),
            headers: {'content-type': 'application/json'}
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

export const deleteQuestion = (testId, questionNumber) => {
    return fetch(API_BASE_URL+'/tests/'+testId+'/questions/'+questionNumber,
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

