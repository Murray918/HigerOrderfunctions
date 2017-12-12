import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router : React.ProtoTypes.obejct
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
