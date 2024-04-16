import { useContext, useState } from "react";
import { useQuery } from "../../contexts/QueryContext";

export default function Searchbar() {
    const { setQuery } = useQuery();

    const handleInput = (e) => {
        e.preventDefault();
        setQuery(e.target.inputField.value)
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