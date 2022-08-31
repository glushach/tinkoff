const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'The user with some email was not found',
  INVALID_PASSWORD: 'Password is invalid'
}

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown error'
}
