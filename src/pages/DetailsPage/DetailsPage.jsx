import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import styles from "./DetailsPage.module.css";
import formatRuntime from "../../utils/formatRuntime";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

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

    const getYoutubeID = (url) => {
        const newUrl = new URL(url)
        return newUrl.searchParams.get("v")
    }   

    return (
        <div className={styles.background}>
            <div className={styles.contentContainer}>
                <img className={styles.backdrop} src={`${data?.backdrop}`} alt="Backdrop Image"/>
                <div className={styles.textContainer}>
                    <h1>{data?.title}</h1>
                    <p className={styles.plot}>{data?.plot_overview}</p>
                    <p className={styles.details}>Genres: {data?.genres.join(", ")}</p>
                    <p className={styles.details}>Release: {data?.release_date}</p>
                    {data?.runtime_minutes && (
                    <p className={styles.details}>
                        Runtime: {formatRuntime(data.runtime_minutes)}
                    </p>
                    )}
                </div>
                <div className={styles.trailerWrapper}>
                    <LiteYouTubeEmbed
                        id={getYoutubeID(data?.trailer)}
                        title="Trailer"
                        className={styles.trailer}
                    />
                </div>
            </div>
        </div>
    )
}