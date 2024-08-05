
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ForgetPassword from './pages/ForgetPassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>

<Route path='/signup' element={<Signup/>}/>

<Route path='/login' element={<Login/>}/>

<Route path='/home' element={<Home/>}/>

<Route path='/forgetpassword' element={<ForgetPassword/>}/>

<Route path='/reset-password/:randomString/:expitationTimestamp' element={<ResetPassword/>}/>
<Route path='*' element={<Login/>}/>

   </Routes>
   
   </BrowserRouter>
   
   </>
  )
}

export default App