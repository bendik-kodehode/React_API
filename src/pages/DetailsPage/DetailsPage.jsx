import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import style from "./DetailsPage.module.css";

export default function DetailsPage() {
    const { id } = useParams();

    const apiConfig = {
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/title/${id}/details/`,
        params: {
            apiKey: import.meta.env.VITE_API_KEY,
        }
    };

    const { data, loading, error } = useFetch(apiConfig);

    // Using inline styling here due to url
    const backdropStyle = {
        backgroundImage: `url(${data?.backdrop})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%"
    }

    return (
        <div className={style.background}>
            <div className="backdrop" style={backdropStyle}>
                <h1>HELLO</h1>
            </div>
        </div>
    )
}