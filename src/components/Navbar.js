import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav>
            <Link to="/">Home</Link>
            <Link to="/list">Employee List</Link>
            <Link to="schedule">Schedule</Link>
            <Link to="pay">Pay Overview</Link>
        </nav>
     );
}
 
export default Navbar;