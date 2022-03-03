import React from 'react'
import Home from './Routing/Home'
import Contact from './Routing/Contact'
import Student from './Routing/Student'
import Header from './Routing/Header'
// import './style.css'
import { BrowserRouter as Router, Routes,Route, Navigate, link } from  'react-router-dom'
import Addstudent from './Routing/Addstudent'

const App = () => {
  return (
    <div>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to ='/home'/> }/>
        <Route path='/home' element={ <Home/>}/>

       <Route path='/contact' element={<Contact/>}/>
       <Route path='/student' element={<Student/>}/>
       <Route path='/addstudent' element={<Addstudent/>}/>
    
   
</Routes>
    </Router>
    </div>
  )
}

export default App