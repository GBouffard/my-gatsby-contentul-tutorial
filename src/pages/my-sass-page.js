import React, { Fragment } from "react"

import BackToHomepage from "../components/back-to-homepage"
import myStyles from "../styles/mySassPage.module.scss"

const ASassPage = () => (
  <Fragment>
    <div className={myStyles.container}>
      <div>
        <h2>This page is styled with node-sass & gatsby-plugin-sass:</h2>
        <p className={myStyles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed
          viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat.
          Nunc aliquet bibendum enim facilisis gravida. Nisl nunc mi ipsum
          faucibus vitae aliquet nec ullamcorper..
        </p>
        <ul>
          Oh, this is a random list!
          <li className={myStyles.listItem}>Hello my name is Guillaume</li>
          <li className={myStyles.listItem}>
            and I have no idea what to type here
          </li>
          <li className={myStyles.listItem}>so I type random stuff</li>
        </ul>
      </div>

      <p className={myStyles.paragraph}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.
      </p>
    </div>

    <p className={myStyles.paragraph}>
      {`I'm a paragraph and I am not inside the container.
      My style should be different. Other paragraphs change colors when hovered but not me! Oh no! I don't!
      I'm using white-space: pre-wrap`}
    </p>
    <BackToHomepage />
  </Fragment>
)

export default ASassPage
