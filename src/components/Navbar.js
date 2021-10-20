import './Navbar.css';
import { NavbarData } from "../data";
function Navbar() {
    return(
        <nav class="navbar">
            <ul class="navbar-nav">
                {NavbarData.map((data, index) => (
                    <li class="navbar-item">
                        <a
                        href={data.link}
                        key={index}
                        className="navbar-link">
                            {data.icon}
                        <p class="link-text">{data.title}</p>
                        </a>
                    </li>
                ))}
                
            </ul>
        </nav>
    );
}


export default Navbar;