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
    
    const formatDate = (date) => new Date(date).getFullYear();

    return (
        <div className={styles.background}>
            <div className={styles.contentContainer}>
                <img className={styles.backdrop} src={`${data?.backdrop}`} alt="Backdrop Image"/>
                <div className={styles.textContainer}>
                    <h2>{data?.title}</h2>
                    
                    <div className={styles.detailsWrapper}>
                        <p className={styles.plot}>{data?.plot_overview}</p>

                        <div className={styles.detailsContainer}>
                            {data?.runtime_minutes && (
                                <div>
                                    <p className={styles.detailsTitle}>Runtime</p> 
                                    <p className={styles.detailsSubtitle}>{formatRuntime(data.runtime_minutes)}</p>
                                </div>
                            )}
                            {data?.user_rating && (
                                <div>
                                    <p className={styles.detailsTitle}>Rating</p> 
                                    <p className={styles.detailsSubtitle}>{data.user_rating} / 10</p>
                                </div>
                            )}
                            {data?.release_date && (
                                <div>
                                    <p className={styles.detailsTitle}>Release</p> 
                                    <p className={styles.detailsSubtitle}>{formatDate(data.release_date)}</p>
                                </div>
                            )}
                            {data?.imdb_id && (
                                <div>
                                    <p className={styles.detailsTitle}>IMDB</p> 
                                    <a href={`https://www.imdb.com/title/${data?.imdb_id}/`} target="_blank">Link</a>
                                </div>
                            )}
                            {data?.genres && (
                                <div>
                                    <p className={styles.detailsTitle}>Genres</p>
                                    {data?.genres.map(e => 
                                    <p className={styles.detailsSubtitle}>{e}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {data?.trailer && (
                    <div className={styles.trailerWrapper}>
                        <h3 style={{textAlign: "center"}}>Trailer</h3>
                        <LiteYouTubeEmbed
                            id={getYoutubeID(data?.trailer)}
                            title="Trailer"
                            className={styles.trailer}
                        />
                    </div> 
                )}
            </div>
        </div>
    )
}