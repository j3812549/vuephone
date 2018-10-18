const TokenKey = 'token'

export function getToken () {
  return sessionStorage.getItem(TokenKey)
}
