import {
  CHANGE_AUTH
} from './types'
//this is our action that returns the payload
export function authenticate(isLoggedIn) {
  return {
    type : CHANGE_AUTH,
    payload : isLoggedIn
  }
}
