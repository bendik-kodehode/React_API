import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import styles from "./DetailsPage.module.css";
import formatRuntime from "../../utils/formatRuntime";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import LoadingPage from "../LoadingPage";
import defaultBackdrop from "../../assets/default_backdrop.jpg"

// TESTING
import mockDetails from "../../testing/mock-details.json"
// TESTING

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

    if (error) return <ErrorPage error={error}/>
    if (loading) return <LoadingPage/>

    // if (data) console.log("DetailsData: ", data);
    
    // TESTING
    // const data = mockDetails[id]
    // TESTING

    const getYoutubeID = (url) => new URL(url).searchParams.get("v");
    
    const formatDate = (date) => new Date(date).getFullYear();

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className={styles.background}>
            <div className={styles.contentContainer}>
                <img 
                    className={styles.backdrop} 
                    src={data?.backdrop ? `${data?.backdrop}` : defaultBackdrop} 
                    alt="Backdrop Image"/>
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
                            {data?.type && (
                                <div>
                                    <p className={styles.detailsTitle}>Type</p> 
                                    <p className={styles.detailsSubtitle}>{capitalize(data?.tmdb_type)}</p>
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