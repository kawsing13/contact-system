import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div
      className="bg-light position-fixed"
      style={{ width: "250px", height: "100vh", top: "56px", left: 0,color: "black" }}
    >
      <ul className="nav flex-column p-3">
        <li className="nav-item mb-2">
          <Link className="nav-link text-black" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-black" to="/users">Users</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-black" to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  )
}
