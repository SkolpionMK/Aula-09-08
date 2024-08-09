import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoliSite from './lolicon'
import Home from './index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/lolis' element={<LoliSite />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)



