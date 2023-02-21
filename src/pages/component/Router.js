import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home'
import Candidates from './Candidates'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/second-page" element={<Candidates />} />
    </Routes>
  )
}

export default Router
