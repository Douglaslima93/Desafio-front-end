import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Questions from './pages/Questions.jsx';
import Score from './pages/Score.jsx';
import { UserNameProvider } from './contexts/userNameContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserNameProvider>
      <BrowserRouter>
      <Routes>

        <Route element={<App/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='questions/:id' element={<Questions/>}/>
        <Route path='score' element={<Score/>}/>

      </Routes>
      </BrowserRouter>
  </UserNameProvider>,
)
