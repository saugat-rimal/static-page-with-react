import "../css/Header.css"
import NavLogo from "../images/airbnb1.png"
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header>
            <nav>
               <Link to="/"><img className="logo" src = {NavLogo} alt="navlogo"/></Link>
               <ul className="menu">
                    <Link to="/"><li className="menu-item">Home</li></Link>   
                    <Link to="/about"><li className="menu-item">About</li></Link>  
                    <Link to="/pricing"><li className="menu-item">Pricing</li></Link>    
                    <Link to="/contact"><li className="menu-item">Contact</li></Link>    
               </ul>
            </nav>
        </header>
    );
}