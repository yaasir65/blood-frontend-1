import React from 'react'
import {Routes, Route} from "react-router-dom"

import Home from './components/Home'
import Header from './pages/Header'
import About from './pages/About'
 import FindBlood from './pages/FindBlood'
 import BloodRegister from './components/BloodRegister'
  import  Sidebar  from './components/Sidebar'
  //  import Dashboard from './pages/Dashboard'
   import Dashboard from './pages/Dashboard'
   import Members from './pages/Members'
    import UpdateBlood from './components/UpdateBlood'
    import Login from './pages/login'
    import CreateAdmin from './components/CreateAdmin'
    import SignUp from './pages/Signup'
    import UserLogin from './pages/userLogin'




 
// import Home from '../components/Home'
// import About from './About'
// import FindBlood from './FindBlood'
// // import BloodRegister from "../BloodRegister"
// import BloodRegister from '../components/BloodRegister'
// // import Dashboard from "./Dashboard"
// import Sidebar from "../components/Sidebar"
// import Dashboard from "./Dashboard"
// import Members from './Members'
// import UpdateBlood from '../components/UpdateBlood'
// import Login from './login'
// import CreateAdmin from '../components/CreateAdmin'

// import SignUp from './userSignUp'
// import UserLogin from './userLogin'

// import Header from '../pages/Header'


function App() {
  return  <Routes>

<Route path='/' element={<Home/>} />

 <Route path='/header' element={<Header/>} />

<Route path='/about' element={<About/>} />

<Route path='/find' element={<FindBlood/>} />
<Route path='/register' element={<BloodRegister/>} />

<Route path='/side' element={<Sidebar/>} />
<Route path='/dashboard' element={<Dashboard/>} />
<Route path='/members' element={<Members/>} />

<Route path='/Update/:_id' element={<UpdateBlood/>} />

<Route path='/login' element={<Login/>} />
<Route path='/createAdmin' element={<CreateAdmin/>} />
<Route path='/userSign' element={<SignUp/>} />
<Route path='/userLogin' element={<UserLogin/>} />




  </Routes>

      
 
}

export default App
