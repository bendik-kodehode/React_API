import Searchbar from "../../components/Searchbar/Searchbar";
import style from "./LandingPage.module.css";

export default function LandingPage() {

    return (
        <div className={style.background}>
            <Searchbar/>
        </div>
    )
}