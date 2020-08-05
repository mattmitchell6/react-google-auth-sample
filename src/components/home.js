import React, { Component } from "react";
import logo from '../logo.svg';
import axios from 'axios';
import Header from './header'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      authenticated: false,
      user: null
    }
  }

  componentDidMount() {
    axios.get('/user').then(res => {
      if(res.data.authenticated) {
        this.setState({
          authenticated: true,
          user: res.data.user
        })
      }
    })
  }

  handleLogout = () => {
    axios.get('/user/logout').then(res => {
      this.setState({
        authenticated: false,
        user: null
      })
    })
  }

  render() {
    const { authenticated } = this.state;

    return (
      <div>
        <Header
          authenticated={authenticated}
          handleLogout={this.handleLogout}
        />
        <img src={logo} className="App-logo" alt="logo" />

        {!authenticated ? (
          <div>
            <h1>You are not logged in</h1>
          </div>
        ) : (
          <div>
            <h1>You are logged in</h1>
            <h2>Welcome {this.state.user.name}!</h2>
          </div>
        )}
      </div>
    )
  }
}
