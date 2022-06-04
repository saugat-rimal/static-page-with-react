import "../css/Header.css"
import NavLogo from "../images/airbnb1.png"

export default function Header(){
    return(
        <header>
            <nav>
               <img className="logo" src = {NavLogo} alt="navlogo"/>
               <ul className="menu">
                   <li>Home</li>
                   <li>About</li>
                   <li>Pricing</li>
                   <li>Contact</li>
               </ul>
            </nav>
        </header>
    );
}