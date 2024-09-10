import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import BoardList from './routes/BoardList'
import Home from './routes/Home'
import UserInfo from './routes/UserInfo'
import React from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/board" element={<BoardList/>}/>
      <Route path='/UserInfo' element={<UserInfo/>}/>
    </Routes>
    <div>
      <p>test</p>
    </div>
    </>
  )
}
export default App
