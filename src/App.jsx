import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashBoard from './pages/Contacts/DashBoard'
import Users from './pages/Users'
import Settings from './pages/Settings'
import AddContact from './pages/Contacts/AddContact'
import EditContact from './pages/Contacts/EditContact'


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
          <Route path='/add-contact' element={<AddContact/>} />
          <Route path='/edit-contact/:contact_id' element={<EditContact/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
