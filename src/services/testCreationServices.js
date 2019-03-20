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
            console.log('test_id:'+response.json().id);
            return response.json();
        } else {
            throw response;
        }
    })
    .then((data) => {
        return data;
    })
    .catch((e) => {
        console.log(e);
    });
}

export const modifyTest = (testId, title) => {
    console.log("here");
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

export const dummyCreateTest = (testId, question) => {
    return fetch('http://www.mocky.io/v2/5c92bce63200005d006bd0d7',
        {
            method: 'PUT'
        }
    )
    .then((response) => {
        console.log(response.status + " " + response.statusText);
        if (response.status == HttpStatus.CREATED) {
            return response.json();
        } else {
            throw response;
        }
    })
    .then((data) => {
        console.log('test_id:'+data.id);
        return data;
    })
    .catch((e) => {
        console.log(e);
    });
}