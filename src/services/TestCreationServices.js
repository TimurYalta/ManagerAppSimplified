import API_BASE_URL from '../constants/ActionTypes';

export const createTest = (name, educationalProgram) => {
    fetch(
        API_BASE_URL+"/tests", 
        {
            method:'POST',
            body:JSON.stringify(
                {
                    title:name
                }
            ),
            headers:{
                'content-type': 'application/json'
            }
        }
    )
    .then((response) => {
        console.log(response.status);
        console.log("test_id:"+response.json().id);
        return response.json();
    })
    .catch((e) => {
        console.log(e);
    })
}