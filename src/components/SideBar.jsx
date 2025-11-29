import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div
      className="bg-light text-dark position-fixed"
      style={{ width: "250px", height: "100vh", top: "56px", left: 0 }}
    >
      <ul className="nav flex-column p-3">
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/users">Users</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  )
}
