import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as TestListActions from '../actions/testsListActions';
import { bindActionCreators } from 'redux';
import {Link,Redirect} from 'react-router-dom';
// import Question from '../components/Question';
// import './style.scss';

class TestList extends React.Component { // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
        super(props);
        this.state={shouldRedirect:false};
    }
    
    render() {
        if(this.state.shouldRedirect){
            return <Redirect to='/CreateTest' />
        }
        return (
            <div>
                <button><Link to='/CreateTest'>{"Create Test"}</Link></button>
                <button onClick={this.props.actions.getTests}>{"REfresh Test"}</button>

                {this.props.testList.map(
                    (el,idx)=>(
                        <div key={idx} style={{display:'flex', justifyContent:'space-between', border: '1px solid black', padding:'20px'}}>
                            {`Name: ${el.title}`}
                            <button onClick={(idx)=>{
                                    this.props.actions.getQuestions(el.id, el.title);
                                    setTimeout(()=>{this.setState({shouldRedirect:true})},200)
                                }}>
                                {"Edit test"}
                            </button>
                            <button onClick={(idx)=>{this.props.actions.deleteTest(el.id)}}>
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
        actions: bindActionCreators(TestListActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestList);

