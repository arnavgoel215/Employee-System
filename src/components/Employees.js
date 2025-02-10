const Employees = () => {

    const showPopup = () => {
        window.confirm("Are you sure you want to delete this person? This action is irreversible!");
    }

    return (
        <table id="employees">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Phone Number</th>
                    </tr>
                    <tr>
                        <td>John Smith</td>
                        <td>Cashier</td>
                        <td>555-555-5555</td>
                        <td><button onClick={showPopup}>Delete</button></td>
                    </tr>
                    <tr>
                        <td>Jane Doe</td>
                        <td>Assistant Manager</td>
                        <td>555-555-5556</td>
                        <td><button onClick={showPopup}>Delete</button></td>
                    </tr>
                </thead>
            </table>
     );
}
 
export default Employees;