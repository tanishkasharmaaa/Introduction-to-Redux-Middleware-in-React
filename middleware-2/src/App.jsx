
// App.js
// App.js
import './App.css'
import { Login } from './components/Login'
import { Route, Routes } from 'react-router-dom'
import { Quiz } from './components/Quiz'
import { Private } from './components/privateRoute'


function App() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/quiz' element={<Private><Quiz /></Private>} />
           
        </Routes>
    )
}

export default App
