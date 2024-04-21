import Searchbar from "../../components/Searchbar/Searchbar";
import style from "./LandingPage.module.css";
import { useState } from "react";

export default function LandingPage() {
    const [checked, setChecked] = useState();

    return (
        <div className={style.background}>
            <Searchbar/>
        </div>
    )
}