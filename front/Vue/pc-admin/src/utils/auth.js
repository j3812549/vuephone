const TokenKey = 'token'

export function getToken () {
  return sessionStorage.getItem(TokenKey)
}

export function setToken () {
  return sessionStorage.setItem('token', TokenKey)
}

export function removeToken () {
  return sessionStorage.removeItem('token')
}
