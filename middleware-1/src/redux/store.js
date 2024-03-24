import {legacy_createStore} from 'redux'
import {applyMiddleware, combineReducers} from 'redux'
import {thunk} from 'redux-thunk'
import {logger} from 'redux-logger'
import { dataReducer } from './reducer';

const combined=combineReducers({data:dataReducer})

const Ware=applyMiddleware(thunk,logger)
export const store=legacy_createStore(combined,Ware)