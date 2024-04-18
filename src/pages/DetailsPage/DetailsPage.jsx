import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import style from "./DetailsPage.module.css";

// TESTING
import mockDetails from "../../testing/mock-details.json"
// -------

export default function DetailsPage() {
    const { id } = useParams();

    const apiConfig = {
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/title/${id}/details/`,
        params: {
            apiKey: import.meta.env.VITE_API_KEY,
        }
    };

    // const { data, loading, error } = useFetch(apiConfig);

    // if (data) console.log("DetailsData: ", data);
    
    const data = mockDetails[id]

    return (
        <div className={style.background}>
            <div className={style.wrapper}>
                <img className={style.backdrop} src={`${data?.backdrop}`} alt="Backdrop Image"/>
                <div className={style.contentContainer}>
                    <h1>{data?.title}</h1>
                </div>
            </div>
        </div>
    )
}