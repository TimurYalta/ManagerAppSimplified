import React from 'react';
// import { Link } from 'react-router-dom';
import {QUESTION_TYPES} from '../constants/Constants';
// import './style.scss';

class Question extends React.Component { // eslint-disable-line react/prefer-stateless-function

    //this.props.number

    constructor(props){
        super(props);
        this.state={
            type: props.type||'',
            description: props.description,
            variants:props.variants,
            right:props.right,
            isModified: false
        };
        this.changeType = this.changeType.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.saveQuestion = this.saveQuestion.bind(this);
    }

    saveQuestion () {
        this.props.saveQuestion(this.props.number,this.state);
    }
    
    changeType(event){
        const type = event.target.value;
        let variants;
        let right;
        switch(type){
            case QUESTION_TYPES.CHECK:
                variants = [];
                right=[];
            case QUESTION_TYPES.RADIO:
                variants = [];
                right=-1;
            case QUESTION_TYPES.TEXT:
                variants: null;
                right: '';
            default:
                variants: null;
                right:'';
        }
        this.setState({type,variants, right});
        
    }

    changeDescription(event){
        this.setState({description: event.target.value});
    }

    render() {
        return (
            <div style={{border:'1px solid black',width:'50%'}}>
                <h1>{this.props.number}</h1>
                <label>{"Choose question type: "}</label>
                <select onChange={this.changeType} value={this.state.type} >
                    <option value = {QUESTION_TYPES.TEXT}>{QUESTION_TYPES.TEXT}</option>
                    <option value = {QUESTION_TYPES.RADIO}>{QUESTION_TYPES.RADIO}</option>
                    <option value = {QUESTION_TYPES.CHECK}>{QUESTION_TYPES.CHECK}</option>
                </select>
                <label>{"Enter question description: "}</label>
                <input onChange={this.changeDescription} type="text"/>
                <button
                    onClick = {this.saveQuestion}
                >
                    {"Save question"}
                </button>
            </div>
        );
    }
}

export default Question;