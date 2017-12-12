import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Header extends Component {

authButton() {
  //this is the logic of our authentication button switching it to true or false
  if (this.props.authenticated) {
    return <button onClick = {() => this.props.authenticate(false)}>Sign Out</button>
  }
  return <button onClick = { () => this.props.authenticate(true)}>Sign In</button>
}

  render() {

    return (
      <nav className="navbar navbar-light">
        <ul className = "nav navbar-nav">
          <li className = "nav-item">
            <Link to='/'>Home</Link>
          </li>
          <li className = "nav-item">
            <Link to='/resources'>Recources</Link>
          </li>
          <li className = "nav-item">
            {/* here is our authentication button for our actions */}
            {this.authButton()}
          </li>
        </ul>
      </nav>
    )
  }
}
//this maps the state of the user to the props
function mapStateToProps(state){
  return { authenticated : state.authenticated}
}
//this connects those props to the state of the application i.e. the store
export default connect(mapStateToProps, actions)(Header);
