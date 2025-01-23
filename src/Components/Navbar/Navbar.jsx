import { Link } from "react-router-dom";
import logo from '../../images/logomain.png'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to='/'><img src={logo} alt="logo" className="img-logo"/></Link>
        <Link to='/'>Główna</Link>
        <Link to='/services'>Usługi</Link>
        <Link to='/contact'>Kontakty</Link>
      </div>
      
    </div>
  )
}

export default Navbar;