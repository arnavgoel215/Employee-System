import { useNavigate } from "react-router-dom";
import Pay from "../components/Pay";

const PayOverview = () => {
    const navigate = useNavigate();
    const handleAddButton = () => {
        navigate('/manualPay')
    }
    return ( 
        <>
            <h2>Pay Overview</h2>
            <Pay />
            <button onClick={handleAddButton}>Manually Add Pay</button>
        </>
     );
}
 
export default PayOverview;