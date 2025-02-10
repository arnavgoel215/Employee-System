import { useNavigate } from "react-router-dom";
import NewEmployeeForm from "../components/NewEmployeeForm";

const NewEmployee = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/list')
    }
    return ( 
        <>
            <NewEmployeeForm />
            <button type="button">Submit</button>
            <button onClick={handleBack}>Back</button>
        </>
     );
}
 
export default NewEmployee;