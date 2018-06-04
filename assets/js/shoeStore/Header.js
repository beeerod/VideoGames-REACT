import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Brandon'
    }
  }

  render () {
    return (<header>
      <div className="logo">
      logo
    </div>
      <nav>
      <a href="#">Create Listing</a>
      <a href="#">About Us</a>
      <a href="#">Log In</a>
      <a href="#" className="register-btn">Register</a>
      </nav>
    </header>)
  }
}
