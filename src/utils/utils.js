import { QUESTION_TYPES } from "../constants/Constants";

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
    switch(question.type) {
        case QUESTION_TYPES.TEXT:
            return {
                type: QUESTION_TYPES.TEXT,
                question: {
                    description: question.description,
                    answer: question.right,
                    weight: 1
                }
            }
        case QUESTION_TYPES.CHECK:
        case QUESTION_TYPES.RADIO:
            return {
                type: question.type,
                question: {
                    description: question.description,
                    variants: {
                        correct: question.variants
                        .map((el) => {
                            return {
                                text: el.text
                            }
                        })
                        .filter(
                            (el,iedx)=>{
                                return question.right.includes(iedx)
                            }
                        ),
                        other: question.variants
                        .map((el) => {
                            return {
                                text:el.text
                            }
                        })
                        .filter(
                            (el,iedx)=>{
                                return !question.right.includes(iedx)
                            }
                        )
                    },
                    weight: 1
                }
            }
    }
}