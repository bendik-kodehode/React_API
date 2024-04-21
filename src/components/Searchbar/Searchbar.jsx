import { useQuery } from "../../contexts/QueryContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from "./Searchbar.module.css";


export default function Searchbar() {
    const { setQuery, type, setType } = useQuery();
    const navigate = useNavigate();

    const handleInput = (e) => {
        e.preventDefault();
        const newQuery = e.target.inputField.value; 
        setQuery(newQuery);
        navigate(`/results/${newQuery}`);
    }
    const handleType = (e) => {
        console.log("type target value: ", e.target.value);
        setType(e.target.value)
    }

    return (
        <form onSubmit={handleInput}>
            <div style={{position: "relative"}}>
                <input 
                    name="inputField"
                    type="text"
                    required
                    autoComplete="off"
                    maxLength="255"
                />
                <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>
                </button>
            </div>
            <div className={styles.checkWrapper}>
                <div className={styles.checkContainer}>
                    <label htmlFor="all">All</label>
                    <input 
                        type="radio" 
                        name="type" 
                        id="all" 
                        value="tv,movie"
                        onChange={handleType}
                        checked={type === "tv,movie"}
                        />
                </div>
                <div className={styles.checkContainer}>
                    <label htmlFor="movie">Movies</label>
                    <input 
                        type="radio" 
                        name="type" 
                        id="movie" 
                        value="movie"
                        onChange={handleType}
                        checked={type === "movie"}
                        />
                </div>
                <div className={styles.checkContainer}>
                    <label htmlFor="tv">TV Shows</label>
                    <input 
                        type="radio" 
                        name="type" 
                        id="tv" 
                        value="tv"
                        onChange={handleType}
                        checked={type === "tv"}
                        />
                </div>
            </div>
        </form>
    )
}