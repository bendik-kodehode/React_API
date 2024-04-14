import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "../../components/Searchbar/Searchbar";
import style from "./LandingPage.module.css";

export default function LandingPage() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        const redirect = () => {
            navigate("/results", { state: { query: input}})
        }
        if (input) redirect();
    }, [input])

    return (
        <div className={style.background}>
            <Searchbar setInput={setInput}/>
        </div>
    )
}