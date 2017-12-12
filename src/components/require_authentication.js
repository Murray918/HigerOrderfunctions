import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class Authentication extends Component {
    //context is like props but skips the component higherarchy but to keep this from being abused it requires you to define such context like we do here
    static contextTypes = {
      router : React.PropTypes.object.isRequired
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/')
      }
    }

    componentWillUpdate(nextProps){
      if (!nextProps.authenticated){
        this.context.router.push('/')
      }
    }

    render() {
      console.log(this.context);
      return <ComposedComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}

// In some other location we want to use this authenticationReducer
