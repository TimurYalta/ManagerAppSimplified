import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as TestCreationActions from '../actions/TestCreationActions';
import { bindActionCreators } from 'redux';
import Question from '../components/Question';
// import './style.scss';

class TestCreation extends React.Component { // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            nameChanged: false
        };
        this.changeName = this.changeName.bind(this);
        this.submitNameChange = this.submitNameChange.bind(this);
    }
    //id?
    //name
    //
    changeName (e) {
        let val = e.target.value;
        let nameChanged = (val == this.state.name);
        this.setState({ name: val, nameChanged });
    };

    submitNameChange(){
        this.props.actions.changeName(this.state.name);
    }

    render() {
        return (
            <div>
                
                <label>
                        {'Enter the test name:'}
                    </label>
                    <input type="text" value={this.state.name} onChange={this.changeName} />
                    {!this.props.id?
                    <button onClick={this.props.actions.createNewTest}>
                        {"Create Test"}
                    </button>:
                    <button enabled={this.state.nameChanged} onClick ={this.submitNameChange}>
                        {"Save"}
                    </button>
                    }
                {this.props.id && <article>
                        (<button onClick={this.props.actions.addQuestion}>
                            {"Add question sss"}
                        </button>
                        )
                    
                    {
                        this.props.questions.map(
                            (question, idx) => (
                            <Question
                                number={idx}
                                type={question.type}
                                description={question.description}
                                variants={question.variants}
                                right={question.right}
                                saveQuestion={this.props.actions.saveQuestion}
                                key = {idx}
                            />
                        ))
                    }
                </article>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        id:  state.testCreation.id,
        name: state.testCreation.name,
        questions: state.testCreation.questions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TestCreationActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestCreation);

