import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";

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

    const backdropStyle = {
        backgroundImage: `url(${data?.backdrop})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%"
    }

    return (
        <div className="background" style={{backgroundColor: "#A9A9A9", height: "stretch", paddingTop: "60px"}}>
            <div className="backdrop" style={backdropStyle}>

            </div>
        </div>
    )
}