
function EditContact() {
  return (
    <div className="container" style={{ marginLeft: "260px"}}>
      <h1>Edit Contact</h1>
      <form action="">
        <div class="mb-3">
            <label htmlFor="first_name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="first_name" name="first_name" value="Jonathan"/>
        </div>
        <div class="mb-3">
            <label htmlFor="last_name" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="last_name" name="last_name" value="Ramos"/>
        </div>
        <div class="mb-3">
            <label htmlFor="email" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="email" name="email" value="jonathan@test"/>
        </div>
        <div class="mb-3">
            <label htmlFor="mobile_no" class="form-label">Phone No.</label>
            <input type="text" class="form-control" id="mobile_no" name="mobile_no" value="09123456789"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>

      </form>
    
    </div>
  );
}
export default EditContact;