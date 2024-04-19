import { useQuery } from "../../contexts/QueryContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


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
        <form 
            onSubmit={handleInput} 
            style={{
                position: "relative",
            }}>
            <input 
                name="inputField"
                type="text"
                style={{
                    height: "1.8rem",
                    outline: "none",
                    border: "none",
                    borderRadius: "1rem",
                    // padding: "5px",
                    paddingRight: "1.5rem",
                    padding: "0.25rem 2.2rem 0.25rem 0.5rem"

                }}
                required
                autoComplete="off"
            />
            <button type="submit" 
                style={{
                    border: "none", 
                    background: "transparent",
                    position: "absolute",
                    right: "5%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize: "1.2rem", color: "gray"}}/>
            </button>
        </form>
    )
}