import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <ul className="menu">
        {authenticated ? (
          <li onClick={() => {this.props.handleLogout()}}>Logout</li>
        ) : (
          <li>
            <a href="http://localhost:8080/user/auth/google" className="button">Login with Google</a>
          </li>
        )}
      </ul>
    );
  }
}
