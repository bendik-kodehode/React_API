import { NavLink } from "react-router-dom"
import { useQuery } from "../../contexts/QueryContext"
import "./Navbar.module.css"

export default function Navbar() {
    const { query } = useQuery();

    return (
    <nav>
        <NavLink to="/"><h1>Watchtower</h1></NavLink>
        <ul>
            <li>
                <NavLink to="/">Search</NavLink>
            </li>
            <li>
                {
                    query ?
                    <NavLink to={`/results/${query}`}>Results</NavLink> :
                    <NavLink>Results</NavLink>
                }
            </li>
        </ul>
    </nav>
    )
}