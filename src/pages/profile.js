import React from "react"

import BackToHomepage from "../components/back-to-homepage"
import { getUser } from "../services/auth"

const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {getUser().hardCodedName}</li>
      <li>E-mail: {getUser().hardCodedEmail}</li>
    </ul>
    <BackToHomepage />
  </>
)
export default Profile
