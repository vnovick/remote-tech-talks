import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { email: '', msg: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    addToMailchimp(this.state.email).then((data) => {
      if (this.state.email === '') {
        this.setState({
          msg: 'Please provide valid email'
        })
      } else {
        this.setState({ email: '', msg: data.msg.split('.').slice(0,2).join('.') });
      }
    }).catch(() => {
      console.log("Error")
      this.setState({ email: '' });
    })
  }

  render() {
    const { msg } = this.state;
    return (
      <form id="signup-form" onSubmit={this.onSubmit}>
        <input
          type="email"
          name="email"
          value={this.state.email}
          id="email"
          onChange={(e) => { this.setState({ email: e.target.value })}}
          placeholder="Email Address"
        />
        <input type="submit" value="Sign Up" />
        <span className={`${msg ? 'visible success' : ''} message`}>
          {msg}
        </span>
      </form>
    );
  }
}

export default EmailForm;
