import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


import styles from '../styles/navbar.css';

function NavBar() {
  return (
    <div className='navbar'>
        <ul>
            <Button id='home-button'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </Button>
            <Button id='login-button'>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </Button>
        </ul>
    </div>
  );
}

export default NavBar;