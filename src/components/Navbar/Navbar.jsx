import { NavLink } from "react-router-dom"
import { useQuery } from "../../contexts/QueryContext"
import styles from "./Navbar.module.css"

export default function Navbar() {
    const { query } = useQuery();

    return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.anchor}>
            <h1 className={styles.title}>Watchtower</h1>
        </NavLink>
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <NavLink to="/" className={styles.anchor}>
                    <h2 className={styles.subtitle}>SEARCH</h2>
                </NavLink>
            </li>
            <li className={styles.listItem}>
                {
                    query ?
                    <NavLink to={`/results/${query}`} className={styles.anchor}>
                        <h2 className={styles.subtitle}>RESULTS</h2>
                    </NavLink> :
                    <NavLink style={{opacity: "50%", cursor: "default"}} className={styles.anchor}>
                        <h2 className={styles.subtitle}>RESULTS</h2>
                    </NavLink>
                }
            </li>
        </ul>
    </nav>
    )
}