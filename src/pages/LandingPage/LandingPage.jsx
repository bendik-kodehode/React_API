import { useState } from "react";

import Searchbar from "../../components/Searchbar/Searchbar";
import style from "./LandingPage.module.css";

export default function LandingPage() {
    const [input, setInput] = useState("");
    console.log(input);

    return (
        <div className={style.background}>
            <Searchbar setInput={setInput}/>
        </div>
    )
}