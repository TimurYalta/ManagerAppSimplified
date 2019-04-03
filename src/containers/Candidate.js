import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as programActions from '../actions/programCreation';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';


class Candidate extends React.Component { // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
        super(props);
        this.renderStatusInfo = this.renderStatusInfo.bind(this);
    }

    renderStatusInfo() {
        const status = this.props.currentStatus;
        const type = status.type;
        if (type == 'rejected') {
            return <div>
                <div>{`Reason: ${status.reason}`}</div>
                <div>{`Can be changed: ${status.fixable ? 'yes' : 'no'}`}</div>
            </div>;
        }
        else if (type == 'interview') {
            
            const d = new Date();
            const dateString = [d.getMonth() + 1,
                d.getDate(),
                d.getFullYear()].join('/') + ' ' +
                    [d.getHours(),
                    d.getMinutes(),
                    d.getSeconds()].join(':');
            return <div>
                <div>{`Date: ${dateString}`}</div>
                <div>{`Interviewer id: ${status.interviewer}`}</div>
            </div>;
        }
        else if (type =='accepted'){
            return <div>
                <div>{`Comment: ${status.comment}`}</div>
                <div>{`Interviewer id: ${status.interviewer}`}</div>
            </div>;
        }
        else{
            return '';
        }
    }

    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <br />
                <div>
                    <div>{`Name: ${this.props.candidate.name}`}</div>
                    <div>{`Test attempts: `}
                        {this.props.testResults.map((test) => (
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>{`Test id: ${test.test_id}`}</div>
                                <div>{`Grade: ${test.grade}`}</div>
                            </div>
                        ))}
                    </div>
                    <div>{`Current status: ${this.props.currentStatus.type}`}</div>
                    <div>
                        {this.renderStatusInfo()}
                    </div>
                    <button>{`Change status`}</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        id: state.candidateApplication.id,
        candidate: state.candidateApplication.candidate,
        currentStatus: state.candidateApplication.history.reduceRight(a => a),
        testResults: state.candidateApplication.test_attempts

    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(programActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Candidate);
