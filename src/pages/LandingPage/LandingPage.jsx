import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../contexts/QueryContext";
import Searchbar from "../../components/Searchbar/Searchbar";
import style from "./LandingPage.module.css";

export default function LandingPage() {
    const { query } = useQuery();
    const navigate = useNavigate();
    
    useEffect(() => {
        const redirect = () => {
            navigate(`/results/${query}`)
        }
        if (query) redirect();
    }, [query])

    return (
        <div className={style.background}>
            <Searchbar/>
        </div>
    )
}