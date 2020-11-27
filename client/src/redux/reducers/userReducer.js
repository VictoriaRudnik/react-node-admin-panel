import {IS_AUTHORIZED} from '../actions/userAction'


const initialState = {
  isAuthorized: false
}

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case IS_AUTHORIZED: 
    return Object.assign({}, state,{
      isAuthorized: action.isAuthorized,
    })
    default: return state
  }
}
