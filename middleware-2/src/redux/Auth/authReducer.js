import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../actionTypes";
import {produce} from 'immer'
const initalState={
    isAuthenticated:false,
    token:""
}
export const AuthReducer=(state=initalState,{type,payload})=>{
    switch(type){
        case LOGIN_SUCCESS:
            return produce(state,(draft)=>{
                draft.isAuthenticated=true;
                draft.token=payload
            })
case LOGIN_FAILURE:
    return produce(state,(draft)=>{
        draft.isAuthenticated=false;
        draft.token=""
    })
    case LOGOUT:
        return produce(state,(draft)=>{
            draft.isAuthenticated=false;
            draft.token=""
            
        })
        
    default:
    return state

}}