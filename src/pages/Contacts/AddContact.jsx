
function AddContact() {
  return (
    <div className="container" style={{ marginLeft: "260px"}}>
      <h1>Add Contact</h1>
      <form action="">
        <div className="mb-3">
            <label htmlFor="first_name" className="form-label">First Name</label>
            <input type="text" className="form-control" id="first_name" name="first_name"/>
        </div>
        <div className="mb-3">
            <label htmlFor="last_name" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="last_name" name="last_name"/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" name="email"/>
        </div>
        <div className="mb-3">
            <label htmlFor="mobile_no" className="form-label">Phone No.</label>
            <input type="text" className="form-control" id="mobile_no" name="mobile_no"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    
    </div>
  );
}
export default AddContact;