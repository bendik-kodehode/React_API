import Searchbar from "../components/Searchbar/Searchbar";

export default function LandingPage() {
    return (
        <div style={{
            background: "radial-gradient(circle, var(--background-two), var(--background-one))",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "60px"
        }}>
            <Searchbar/>
        </div>
    )
}