import API_BASE_URL from '../constants/ActionTypes';
var HttpStatus = require('http-status-codes');

export const createTest = (name) => {
    fetch(API_BASE_URL+'/tests', 
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
            console.log('test_id:'+response.json().id);
            return response.json();
        } else {
            throw response;
        }
    })
    .catch((e) => {
        console.log(e);
    });
}

export const modifyTest = (testId, title) => {
    fetch(API_BASE_URL+'tests/'+testId,
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
    fetch(API_BASE_URL+'/tests/'+testId+'/questions',
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

export const createQuestion = (testId, question) => {
    fetch(API_BASE_URL+'/tests/'+testId+'/questions',
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
    fetch(API_BASE_URL+'/tests/'+testId+'/questions/'+questionNumber,
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
    fetch(API_BASE_URL+'/tests/'+testId+'/questions/'+questionNumber,
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