import React, { Component } from "react";
import { connect } from "react-redux";
//this is our higher order component that is basically a function that wraps a component and uses logic to determine a certain behavior of our component being wrapped
export default function(ComposedComponent) {
  class Authentication extends Component {
    //context is like props but skips the component higherarchy but to keep this from being abused it requires you to define such context like we do here
    static contextTypes = {
      router : React.PropTypes.object.isRequired
    }
    //in this life cycle method if the component tries to mount the recources page without being logged in it will force them back to the home page
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/')
      }
    }
    //in this life cycle method which recieves props before the component updates with said nextProps it will force the user to home if they are not logged in
    componentWillUpdate(nextProps){
      if (!nextProps.authenticated){
        this.context.router.push('/')
      }
    }
    //this pushes the props from the higher order component onto the component that is taken in the arguments of the higher order component
    render() {
      console.log(this.context);
      return <ComposedComponent {...this.props} />;
    }
  }
  // this maps state to props and saves weather the user is logged in or not
  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }
  //this connects the authentication function to the store
  return connect(mapStateToProps)(Authentication);
}
