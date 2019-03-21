import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import TestCreation from '../containers/TestCreation';
import TestList from '../containers/TestList';
import {Switch, Route,HashRouter} from 'react-router-dom';
/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { actions } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Simple Redux Boilerplate</div>

        <HashRouter basename='/'>
          <Switch>
            <Route exact path='/' component={TestList}/>
            <Route exact path='/CreateTest' component={TestCreation}/>
          </Switch>
        </HashRouter> 
        <Footer />
      </div>
    );
  }
}

App.propTypes = {

};


function mapStateToProps(state) {
  return {
 
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
