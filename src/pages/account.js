import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import styled from "styled-components"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

import BackToHomepage from "../components/back-to-homepage"

const StyledTopNav = styled.nav`
  display: flex;
  justify-content: space-around;
`

const StyledDiv = styled.div`
  font-family: fantasy;
  font-weight: bold;
  color: deeppink;
  display: flex;
  justify-content: center;
  margin: 50px 0;
`

const AccountHome = ({ user }) => (
  <StyledDiv>Hi, {user.name ? user.name : "friend"}!</StyledDiv>
)
const Settings = () => <StyledDiv>This is the Settings page!</StyledDiv>
const Billing = () => <StyledDiv>This is the Billing page!</StyledDiv>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  const onLogOutClick = e => {
    logout()
    e.preventDefault()
  }

  return (
    <>
      <StyledTopNav>
        <Link to="/account">Home</Link>
        <Link to="/account/settings">Settings</Link>
        <Link to="/account/billing">Billing</Link>
        <a href="#logout" onClick={onLogOutClick}>
          Log Out
        </a>
      </StyledTopNav>

      <Router>
        <AccountHome path="/account" user={user} />
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
      </Router>

      <BackToHomepage />
    </>
  )
}

export default Account
