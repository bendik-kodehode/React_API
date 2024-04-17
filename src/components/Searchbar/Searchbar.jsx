import { useQuery } from "../../contexts/QueryContext";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
    const { query, setQuery } = useQuery();
    const navigate = useNavigate();

    const handleInput = (e) => {
        e.preventDefault();
        setQuery(e.target.inputField.value)
        navigate(`/results/${query}`);
        console.log("Searchbar Value: ", e.target.inputField.value);
        console.log("Searchbar Query: ", query);
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