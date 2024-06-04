import React from 'react'
import Banner from './Component/Banner/Banner'
import { Routes, Route } from 'react-router-dom'
import Detail from './Component/DetailPage/Details'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Banner title={"Filmagnet Comedy"} shot_title="Click to See!!" />} />
        <Route path='/deatils' element={<Detail  />} />
      </Routes>
    </div>
  )
}
export default App