const NewEmployeeForm = () => {
    return ( 
        <form>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="fname"/>
            <label type="lname" id="lname">Last Name</label>
            <input type="text" id="lname" name="lname"></input>
            <label for="position" id="position" name="position">Position</label>
            <input type="text" id="position" name="position"></input>
            <label for="phone" id="phone" name="phone">Phone Number</label>
            <input type="text" id="phone" name="phone"></input>
        </form>
     );
}
 
export default NewEmployeeForm;