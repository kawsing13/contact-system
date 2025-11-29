import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Users from './pages/Users'
import Settings from './pages/Settings'


function App() {
  return (
    <Router>
      <NavBar />
      <div className="container-fluid" style={{ marginTop: '70px', height: '100vh' }}>
        <SideBar/>
        <Routes>
          <Route path='/dashboard' element={<DashBoard/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
