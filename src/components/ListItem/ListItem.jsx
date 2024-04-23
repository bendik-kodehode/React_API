import { Link } from "react-router-dom"
import styles from "./ListItem.module.css";

export default function ListItem({item, id}) {
    return (
    <li className={styles.list}>
        <Link to={`/details/${id}`}>
            <h2>{item.name}</h2>
            <div className={styles.dateContainer}>
                <p>{item?.year}</p>
            </div>
        </Link>

    </li>
    )
}