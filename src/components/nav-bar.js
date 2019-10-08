import React, { Fragment } from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"

import { getUser, isLoggedIn, logout } from "../services/auth"

const StyledContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: space-between;
  top: 8px;
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

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: bold;
  padding: 0 5px;
`

export default () => {
  const hardCodedMessage = isLoggedIn()
    ? `Hello, ${getUser().hardCodedName}`
    : "You are not logged in"

  return (
    <StyledContainer>
      <StyledNav>
        <StyledSpan>{hardCodedMessage}</StyledSpan>
        <span>
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
        </span>
      </StyledNav>
    </StyledContainer>
  )
}
