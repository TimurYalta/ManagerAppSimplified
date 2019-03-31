import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../actions/loginActions';


class LoginPage extends React.Component{
    render() {
        return <div>
            <label>
                {"Login:"}
                <input type= "text"/>
            </label>
            <br/>
            <label>
                {"Password:"}
                <input type ="password"/>
            </label>
            <br/>
            <button onClick={this.props.actions.login}>
                {"Login"}
            </button>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        token: state.application.token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
