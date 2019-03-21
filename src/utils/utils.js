import {QUESTION_TYPES} from '../constants/Constants';

export const parseQuestionFromJSON = (question) => {
    switch(question.type) {
        case QUESTION_TYPES.TEXT:
            return {
                type: QUESTION_TYPES.TEXT,
                description: question.question.description,
                right: question.question.answer
            }
        case QUESTION_TYPES.RADIO:
            return {
                type: QUESTION_TYPES.RADIO,
                description: question.question.description,
                variants: question.question.variants.map((el)=>{return el.text }),
                right: question.question.answer
            }
        case QUESTION_TYPES.CHECK:
            return {
                type: QUESTION_TYPES.CHECK,
                description: question.question.description,
                variants: question.question.variants.map((el)=>{return el.text }),
                right: question.question.answer
            }
    }
}

export const parseQuestionToJSON = (question) => {

}