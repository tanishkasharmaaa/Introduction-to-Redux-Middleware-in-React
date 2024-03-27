import { LOGIN_FAILURE, LOGIN_SUCCESS ,LOGOUT} from "../actionTypes"

export const loginSuccess=(token)=>({
    type:LOGIN_SUCCESS,
    payload:token
})

export const loginFailure=()=>({
    type:LOGIN_FAILURE,
})

export const logout=()=>({
type:LOGOUT
})