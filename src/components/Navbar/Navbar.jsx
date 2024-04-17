import { NavLink } from "react-router-dom"
import "./Navbar.module.css"

export default function Navbar() {
    return (
    <nav>
        <NavLink to="/"><h1>Watchtower</h1></NavLink>
        <ul>
            <li>
                <NavLink to="/">Search</NavLink>
            </li>
            <li>
                <NavLink to="/results:query">Results</NavLink>
            </li>
            <li>
                <NavLink to="/details:id">Details</NavLink>
            </li>
        </ul>
    </nav>
    )
}