const PayForm = () => {
    return ( 
    <>
        <form>
            <label for="fname">First Name *</label>
            <input type="text" id="fname" name="fname"/>
            <label type="lname" id="lname">Last Name *</label>
            <input type="text" id="lname" name="lname"></input>
        </form>
        <p>Add either the weekly salary or hours worked below</p>
        <form>
            <label for="salary">Weekly Salary</label>
            <input type = "text" id="salary" name="salary" />
            <label for="hours">Hours Worked</label>
            <input type = "text" id="hours" name="hours" />
        </form>
    </>
    );
}
 
export default PayForm;