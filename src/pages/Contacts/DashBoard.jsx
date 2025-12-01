const handleDelete = (id) => {
  const confirmed = window.confirm("Are you sure you want to delete this contact?");

  if (confirmed) {
    
    console.log("Deleted contact:", id);
    alert("Contact deleted!");
  }
};




function DashBoard() {
  return (
    <div className="container" style={{ marginLeft: "260px" }}>
      <h1>Contact Lists</h1>
      <div style={{ float: "right" }}>
        <table>
          <tbody>
            <tr>
              <td colSpan="7">
                <a href="/add-contact">Add Contacts</a>
              </td>
            </tr>
            <tr>
              <td colSpan="7"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>123</td>
            <td>@mdo</td>
            <td>
              <a href="/edit-contact/1">Edit | </a>
              <span
                style={{ cursor: "pointer", color: "red" }}
                onClick={() => handleDelete(1)}
              >
                Delete
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>123</td>
            <td>@fat</td>
            <td>
              <a href="/edit-contact/1">Edit</a> | Delete
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
            <td>123</td>
            <td>@social</td>
            <td>
              <a href="/edit-contact/1">Edit</a> | Delete
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default DashBoard;