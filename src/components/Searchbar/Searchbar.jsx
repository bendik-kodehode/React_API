export default function Searchbar({setInput}) {
    const handleInput = (e) => {
        e.preventDefault();
        setInput(e.target.inputField.value)
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