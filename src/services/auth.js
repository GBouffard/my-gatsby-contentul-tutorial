// because this is hard-coded, prefixing all variables with hardCoded
export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  // this is whee the real logic to handle authentication should be used.
  if (username === `GB` && password === `password`) {
    setUser({
      hardCodedUsername: `GB`,
      hardCodedName: `Guillaume`,
      hardCodedEmail: `guillaume@fake-email.com`,
    })
    return true
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.hardCodedUsername
}

export const logout = callback => {
  setUser({})
  callback()
}
