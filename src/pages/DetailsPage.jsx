import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";

export default function DetailsPage() {
    const id = useParams();

    // const apiConfig = {
    //     method: "get",
    //     url: `${import.meta.env.VITE_API_URL}/title/${id}/details/`,
    //     params: {
    //         apiKey: import.meta.env.VITE_API_KEY,
    //     }
    // };

    // const { data, loading, error } = useFetch(apiConfig);

    console.log("detailId: ", id);
    // if (data) console.log("detailData: ", data);

    return (
    <>
    <p>Details!</p>
    </>
    )
}