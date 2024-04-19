import { useQuery } from "../../contexts/QueryContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from "./Searchbar.module.css";


export default function Searchbar() {
    const { query, setQuery } = useQuery();
    const navigate = useNavigate();

    const handleInput = (e) => {
        e.preventDefault();
        const newQuery = e.target.inputField.value; 
        setQuery(newQuery);
        navigate(`/results/${newQuery}`);
    }
    return (
        <form onSubmit={handleInput}>
            <input 
                name="inputField"
                type="text"
                required
                autoComplete="off"
            />
            <button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>
            </button>
        </form>
    )
}