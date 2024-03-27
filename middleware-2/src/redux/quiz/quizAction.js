import { INCREMENT, ISERROR, ISLOADING, NEXT_QUESTION, QUESTION, SKIP } from "../actionTypes"
import { produce } from "immer"
const initialState={
    question:[],
    correct:0,
    isLoading:false,
    isError:false,
    skip:false,
    questionIndex:0
}
export const QuizReducer=(state=initialState,{type,payload})=>{
    switch(type){
case ISLOADING:
    return produce(state,(draft)=>{
        draft.isLoading=true
    })
    case ISERROR:
        return produce(state,(draft)=>{
            draft.isLoading=false;
            draft.isError=true
        })
        case QUESTION:
            return produce(state,(draft)=>{
                draft.isLoading=false;
                draft.question=payload;
            })
            case INCREMENT:
                return {
                    ...state,
                    correct:state.correct+1
                }
                case SKIP:
                    return{
                        ...state,
                        questionIndex:state.questionIndex+1
                    }
               case NEXT_QUESTION:
                return{
                    ...state,
                    questionIndex:state.questionIndex+1
                }
default:
    return state
    }
}