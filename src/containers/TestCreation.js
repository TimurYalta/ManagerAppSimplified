import React from 'react';
import PropTypes from 'prop-types';
import Question from 'components/Question';
import './style.scss';

export default class TestCreation extends React { // eslint-disable-line react/prefer-stateless-function

    constructor(props){
        this.state= {
            name: this.props.name,
            nameChanged: false
        };
    }
    //id?
    //name
    //
    changeName = (e) =>{
        let val = e.target.value;
        let nameChanged = (val == this.state.name);
        this.setState({name: val, nameChanged});
    };

    render() {
        return (
            <article>
                <label>
                    {'Enter the test name:'}
                </label>
                <input type="text" value = {this.state.name} onChange= {this.changeName}/>
                <button enabled = {this.state.nameChanged}>
                    {"Save"}
                </button>

                {this.props.id && 
                    <button >
                        {"Add question"}
                    </button>
                    
                    {this.props.questions.map(
                        (question, idx) => (
                            <Question 
                                number = {idx}
                                type = {question.type}
                                description = {question.description}
                                variants = {question.variants}
                                right = {question.right}
                                saveQuestion = {this.props.saveQuestion}
                            />
                        ));
                    }
                }
            </article>
        );
    }
}

// TestCreation.propTypes = {
//     questions: PropTypes.arrayOf(PropTypes.object),

//     // loading: PropTypes.bool,
//     // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//     // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
//     // onSubmitForm: PropTypes.func,
//     // username: PropTypes.string,
//     // onChangeUsername: PropTypes.func
// };
function mapStateToProps(state) {
    return {
        counter: state.counter
    };
  }