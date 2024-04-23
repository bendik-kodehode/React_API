import { NavLink } from "react-router-dom"
import { useQuery } from "../../contexts/QueryContext"
import styles from "./Navbar.module.css"

export default function Navbar() {
    const { query } = useQuery();

    return (
    <nav>
        <NavLink to="/">
            <h1 className={styles.title}>Watchtower</h1>
        </NavLink>
        <ul>
            <li>
                <NavLink to="/">
                    <h2 className={styles.subtitle}>SEARCH</h2>
                </NavLink>
            </li>
            <li>
                <NavLink to={query ? `/results/${query}` : "/"}>
                    <h2 className={`${styles.subtitle} ${query ? "" : styles.disabled}`}>RESULTS</h2>
                </NavLink>
            </li>
        </ul>
    </nav>
    )
}