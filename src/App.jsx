import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import { About, Details, Home, Login } from './pages'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='' element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Router path= "details" element={<PrivateRoute/>} >
         <Route path="" element={<Details />} />
        </Router>
    
      </Routes>
    </>
  )
}

export default App