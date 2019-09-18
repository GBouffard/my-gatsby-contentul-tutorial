import React, { Fragment } from "react"

import styles from "./about-css-modules.module.css"
import Container from "../components/css-container"
import BackToHomepage from "../components/backToHomepage"

// props and styles have the same names so we can find them easily
const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Fragment>
    <Container>
      <h1>A page about CSS Modules</h1>
      <p>CSS Modules are cool</p>
    </Container>

    <User
      username="Guillaume Bouffard"
      avatar="https://avatars1.githubusercontent.com/u/10553003?s=460&v=4"
      excerpt="I'm Guillaume Bouffard. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="GB Evil's twin"
      avatar="https://avatars1.githubusercontent.com/u/10553003?s=460&v=4"
      excerpt="I'm GB Evil's twin, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />

    <BackToHomepage />
  </Fragment>
)
