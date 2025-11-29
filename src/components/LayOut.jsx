import Sidebar from "./SideBar";

 function LayOut({ children, pageTitle }) {
  return (
    <div>
      {/* Topbar */}
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">{pageTitle}</span>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar />

      {/* Page content */}
      <div
        className="flex-grow-1 p-3"
        style={{ marginTop: "56px", marginLeft: "250px", minHeight: "100vh" }}
      >
        {children}
      </div>
    </div>
  );
}
export default LayOut;
