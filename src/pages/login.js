import React from "react"
import { navigate } from "gatsby"

import { handleLogin } from "../services/auth"
import BackToHomepage from "../components/back-to-homepage"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    navigate(handleLogin(this.state) ? `/profile` : "/login")
  }

  render() {
    return (
      <>
        <h1>Log in</h1>
        <form method="post" onSubmit={event => this.handleSubmit(event)}>
          <label>
            Username
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <input type="submit" value="Log In" />
        </form>
        <BackToHomepage />
      </>
    )
  }
}
export default Login
