import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as TestCreationActions from '../actions/TestCreationActions';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
// import Question from '../components/Question';
// import './style.scss';

class TestList extends React.Component { // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button><Link to='/CreateTest'>{"Create Test"}</Link></button>
                {this.props.testList.map(
                    (el,idx)=>(
                        <div style={{display:'flex', justifyContent:'space-between', border: '1px solid black', padding:'20px'}}>
                            {`Name: ${el.name}`}
                            <button>
                                {"Edit test"}
                            </button>
                            <button>
                                {"Delete test"}
                            </button>
                        </div>
                    )
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        testList:state.testList
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
)(TestList);

