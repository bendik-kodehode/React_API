import { NavLink } from "react-router-dom"
import { useQuery } from "../../contexts/QueryContext"
import styles from "./Navbar.module.css"

export default function Navbar() {
    const { query } = useQuery();

    return (
    <nav className={styles.navbar}>
        <NavLink to="/">
            <h1 className={styles.title}>Watchtower</h1>
        </NavLink>
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <NavLink to="/">
                    <h2 className={styles.subtitle}>SEARCH</h2>
                </NavLink>
            </li>
            <li className={styles.listItem}>
                {
                query ?
                <NavLink to={`/results/${query}`}>
                    <h2 className={styles.subtitle}>RESULTS</h2>
                </NavLink> :
                <NavLink to={query ? `/results/${query}` : "/"}>
                    <h2 className={`${styles.subtitle} ${query ? "" : styles.disabled}`}>RESULTS</h2>
                </NavLink>
                }
            </li>
        </ul>
    </nav>
    )
}