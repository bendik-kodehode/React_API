import { NavLink } from "react-router-dom"
import "./Navbar.module.css"

export default function Navbar() {
    return (
    <nav>
        <h1>Watchtower</h1>
        <ul>
            <NavLink>
                <li>Search</li>
            </NavLink>
            <NavLink>
                <li>Results</li>
            </NavLink>
            <NavLink>
                <li>Details</li>
            </NavLink>
        </ul>
    </nav>
    )
}