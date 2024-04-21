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
                <NavLink to="/"><h2>SEARCH</h2></NavLink>
            </li>
            <li>
                {
                    query ?
                    <NavLink to={`/results/${query}`}>
                        <h2>RESULTS</h2>
                    </NavLink> :
                    <NavLink style={{opacity: "50%", cursor: "default"}}>
                        <h2>RESULTS</h2>
                    </NavLink>
                }
            </li>
        </ul>
    </nav>
    )
}