import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom"
import BoardList from './routes/BoardList'
import Home from './routes/Home'
import UserInfo from './routes/UserInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/board" element={<BoardList/>}/>
      <Route path='/UserInfo' element={<UserInfo/>}/>
    </Routes>
    <p>testd</p>
    </>
  )
}
export default App
