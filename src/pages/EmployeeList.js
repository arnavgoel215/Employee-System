import { useNavigate } from "react-router-dom";
import Employees from "../components/Employees";

const EmployeeList = () => {
    const navigate = useNavigate();

    const handleNewEmployeeClick = () => {
        navigate('/newEmployee');
    };

    return ( 
        <>
            <h2>Employee List</h2>
            <Employees />
            <button onClick={handleNewEmployeeClick}>Add New Employee</button>
            <button type="button">Filter</button>
            <p>Help:</p>
            <p>To add a new employee, click the "Add New Employee" button. To delete an employee click the delete button next to each employee.</p>
        </>
     );
}
 
export default EmployeeList;