import { QUESTION_TYPES } from "../constants/Constants";

export const parseQuestionFromJSON = (question) => {
    console.log("Prishel: ")
    console.log(question);
    switch(question.type) {
        case QUESTION_TYPES.TEXT:
            return {
                type: QUESTION_TYPES.TEXT,
                description: question.description,
                right: question.answer,
                isCreated:true
            }
        case QUESTION_TYPES.RADIO:
            let variants1 = question.variants.correct.map((el)=>{return el.text});
            variants1 = [...variants1, ...question.variants.other.map((el) => {return el.text})];
            return {
                type: QUESTION_TYPES.RADIO,
                description: question.description,
                variants: variants1,
                right: question.variants.correct.map((el, idx)=>{return idx}),
                isCreated:true
            }
        case QUESTION_TYPES.CHECK:
        let variants2 = question.variants.correct.map((el)=>{return el.text});
        variants1 = [...variants2, ...question.variants.other.map((el) => {return el.text})];
        return {
            type: QUESTION_TYPES.CHECK,
            description: question.description,
            variants: variants2,
            right: question.variants.correct.map((el, idx)=>{return idx}),
            isCreated:true
        }
    }
}

export const parseQuestionToJSON = (question) => {
    switch(question.type) {
        case QUESTION_TYPES.TEXT:
            return {
                type: QUESTION_TYPES.TEXT,
                description: question.description,
                answer: question.right,
                weight: 1
            }
        case QUESTION_TYPES.CHECK:
        case QUESTION_TYPES.RADIO:
            return {
                type: question.type,
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