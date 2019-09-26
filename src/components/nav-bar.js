import React, { Fragment } from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"

import { getUser, isLoggedIn, logout } from "../services/auth"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 0;
`

const StyledSpan = styled.span`
  margin-bottom: 6px;
`

const StyledLink = styled(Link)`
  background: darkorange;
  text-decoration: none;
  padding: 3px;
  border: 3px solid black;
  border-radius: 10px;
  margin: 0 5px;
`

const StyledAnchor = styled.a`
  background: darkorange;
  text-decoration: none;
  padding: 3px;
  border: 3px solid black;
  border-radius: 10px;
  margin: 0 5px;
`

export default () => {
  const message = isLoggedIn()
    ? `Hello, ${getUser().name}`
    : "You are not logged in"

  return (
    <StyledContainer>
      <StyledSpan>{message}</StyledSpan>
      <nav>
        <StyledLink to="/">Home</StyledLink>

        {isLoggedIn() ? (
          <Fragment>
            <StyledLink to="/profile">Profile</StyledLink>
            <StyledAnchor
              href="/"
              onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/`))
              }}
            >
              Logout
            </StyledAnchor>
          </Fragment>
        ) : (
          <StyledLink to="/login">Login</StyledLink>
        )}
      </nav>
    </StyledContainer>
  )
}
