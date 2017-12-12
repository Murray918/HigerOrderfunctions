import {
  CHANGE_AUTH
} from '../actions/types'
//this is the function where we set if the user is logged in to true or false and the inital state that is set is false
export default function (state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload
  }
  return state
}
