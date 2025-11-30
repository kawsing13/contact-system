function DashBoard() {
  return (
    <div className="container" style={{ marginLeft: "260px"}}>
      <h1>Contact Lists</h1>
      <div style={{float:"right"}}>
        <tr>
            <td colSpan="7">
              Add Contacts | Contacts
            </td>
          </tr>
          <tr>
            <td colSpan="7">

            </td>
          </tr>

      </div>
        <table class="table table-striped">
          

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
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
              <td>Edit | Delete</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>123</td>
              <td>@fat</td>
              <td>Edit | Delete</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>John</td>
              <td>Doe</td>
              <td>123</td>
              <td>@social</td>
              <td>Edit | Delete</td>
            </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
        </nav>
    </div>
  )
}
export default DashBoard;