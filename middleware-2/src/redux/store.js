import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import { AuthReducer } from './Auth/authReducer';
import { QuizReducer } from './quiz/quizAction';
import {thunk} from 'redux-thunk'
import {logger} from 'redux-logger'
const combined= combineReducers({auth:AuthReducer,quiz:QuizReducer})
export const store=legacy_createStore(combined,applyMiddleware(logger,thunk))