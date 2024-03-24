import axios from 'axios'
import './App.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FAILURE, REQUEST, SUCCESS } from './redux/action';

function App() {
  const dispatch=useDispatch();
  const {isLoading,isError,user}=useSelector((store)=>store.data)
 const getData=async()=>{
  dispatch({type:REQUEST})
try {
  const res=await axios.get(`https://jsonplaceholder.typicode.com/users`);
  console.log(res.data)
  dispatch({type:SUCCESS,payload:res.data})
} catch (error) {
  console.log(error)
  dispatch({type:FAILURE})
}
 }
useEffect(()=>{getData()},[])
  return (
    <>
     <h1>MiddleWare</h1> 
     <div>
      {isLoading&&<h2>Loading...</h2>}
      {isError&&<h2>Some error occurred</h2>}
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
      {user.map((ele)=>(
        <div key={ele.id} style={{border:"1px solid"}}>
      <p>{ele.name}</p>
      <p>{ele.username}</p>
      <p>{ele.email}</p>
        </div>
      ))}</div>
     </div>
    </>
  )
}

export default App
