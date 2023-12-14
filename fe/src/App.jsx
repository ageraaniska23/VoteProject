import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Authentication from './page/Authentication'
import HomePage from './page/HomePage'
import SideBar from './page/Navbar/NavBar'
import Footer from './page/footer/Footer'
import Home from './page/Home'
import Admin from './page/Admin/Admin'
import SignUp from './page/SignUp'

function App() {
  

  return (
    <Router>
      <SideBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/Login" element={<Authentication />}/>
        <Route exact path="/SignUp" element={<SignUp />}/>
        <Route exact path="/Home" element={<Home />}/>
        <Route exact path='/Admin' element={<Admin />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
