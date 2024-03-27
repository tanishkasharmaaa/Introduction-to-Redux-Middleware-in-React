// Quiz.js
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT, ISERROR, ISLOADING, NEXT_QUESTION, QUESTION, SKIP } from "../redux/actionTypes";
import { Select, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export function Quiz() {
    const dispatch = useDispatch();
    const { isLoading, isError, questionIndex, question, correct } = useSelector(state => state.quiz);
    const navigate = useNavigate();

    const fetchQuestions = async () => {
        dispatch({ type: ISLOADING });
        try {
            const res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz`);
            const data = await res.json();
            const final = data.data;
            dispatch({ type: QUESTION, payload: final });
        } catch (error) {
            console.log(error);
            dispatch({ type: ISERROR });
        }
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    const OptionSelection = (correctOptionIndex, selectedOptionIndex) => {
        if (correctOptionIndex === selectedOptionIndex) {
            dispatch({ type: INCREMENT });
        }
    }
   
    const next = () => {
        console.log('clicked')
        dispatch({ type: NEXT_QUESTION })
    }

    const Skip = () => {
        dispatch({ type: SKIP })
    }

   

    return (
        <>
            <h1>Quiz Game</h1> 
           
            <h1>{correct && <h2>Your Score : {correct}</h2>}</h1>
            {isLoading && <h2>Loading...</h2>}
            {isError && <h2>Some error occurred</h2>}
            {question.length > 0 && questionIndex < question.length && (
            <div>
                <h2>{question[questionIndex].question}</h2>
                <Select placeholder="Select option" defaultValue onChange={(e) => OptionSelection(question[questionIndex].correctOptionIndex, parseInt(e.target.value))}>
                    {question[questionIndex].options.map((opt, index) => (
                        <option key={index} value={index}>
                            {opt}
                        </option>
                    ))}
                </Select>
                <Button onClick={Skip}>Skip</Button>
                <Button key={question[questionIndex].id} onClick={next}>
                    Submit
                </Button>
            </div>
            )}
           
        </>
    );
}
