export default function ErrorPage({error}) {
    console.log("ErrorPage err: ", error);
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "radial-gradient(circle, rgb(90, 90, 90), rgb(54, 54, 54))",
            height: "100%",
            gap: "1rem",
            color: "white",
        }}>
            <h2 style={{
                fontSize: "5rem", 
                transform: "rotate(90deg)",
                userSelect: "none"
                }}>:(</h2>
            <p style={{
                fontSize: "1.5rem"
            }}>{error ? error : "Fatal error. Please contact an adult"}.</p>
        </div>
    )
}