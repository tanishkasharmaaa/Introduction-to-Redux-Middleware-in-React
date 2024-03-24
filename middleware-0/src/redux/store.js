import {legacy_createStore} from 'redux'
import {applyMiddleware, combineReducers} from 'redux'
import {thunk} from 'redux-thunk'
import {logger} from 'logger'
import { DataReducer } from './reducer'
const combined=combineReducers({data:DataReducer});

const actionTypeLogger=(store)=>(next)=>(action)=>{
console.log("action" , action.type)
next(action)
}

const payloadLogger=(store)=>(next)=>(action)=>{
console.log("payload",action.payload)
next(action)
}
const middleware=applyMiddleware(actionTypeLogger,payloadLogger,thunk)

export const store=legacy_createStore(combined,middleware)