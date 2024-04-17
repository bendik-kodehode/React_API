import { useQuery } from "../../contexts/QueryContext";
import { useNavigate } from "react-router-dom";

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
                style={{
                    height: "25px",
                    outline: "none",
                    border: "none",
                    borderRadius: "10px",
                    padding: "5px"
                }}
                required
                autoComplete="off"
            />
        </form>
    )
}