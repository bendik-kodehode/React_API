export default function Searchbar({setInput}) {

    const handleInput = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }

    return (
        <input 
            type="text"
            style={{
                height: "25px",
                outline: "none",
                border: "none",
                borderRadius: "10px",
                padding: "5px"
            }}
            onChange={handleInput}
        />
    )
}