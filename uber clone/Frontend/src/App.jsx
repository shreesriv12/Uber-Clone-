import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Start from './pages/Start'
import CaptainSignup from './pages/CaptainSignup'
import Captainlogin from './pages/Captainlogin'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CapainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/signup' element={<UserSignup/>}/>
      <Route path='/captain-login' element={<Captainlogin/>}/>
     <Route path='/captain-signup' element={<CaptainSignup/>}/>
     <Route path='/home' element={
      <UserProtectWrapper>
      <Home/>
      </UserProtectWrapper>
    }/>
    <Route path='/user/logout' element={
      <UserProtectWrapper>
    <UserLogout/>
    </UserProtectWrapper>
    }/>
         <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>

        } />
         <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>
        } />
     </Routes>
    </div>
  )
}

export default App
