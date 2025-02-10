import { useNavigate } from "react-router-dom";
import PayForm from "../components/PayForm";

const ManualPay = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/pay')
    }
    return ( 
        <>
            <h2>Manual Pay Form</h2>
            <PayForm />
            <button type="button">Submit</button>
            <button onClick={handleBack}>Back</button>
        </>
     );
}
 
export default ManualPay;