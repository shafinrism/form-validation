
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Registration from './Pages/Registration'
import Login from './Pages/Login'

function App() {
 

  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </>
  )
}

export default App
