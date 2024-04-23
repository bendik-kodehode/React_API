import { useQuery } from "../../contexts/QueryContext";
import useFetch from "../../hooks/useFetch";
import ListItem from "../../components/ListItem/ListItem"
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import styles from "./ResultsPage.module.css"

// TESTING
// import mockList from "../testing/mock-list.json"
// -------

export default function ResultsPage() {
    const { query, type } = useQuery();

    const apiConfig = {
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/search/`,
        params: {
            apiKey: import.meta.env.VITE_API_KEY,
            search_field: "name",
            types: type,
            search_value: query
        }
    };

    const { data, loading, error } = useFetch(apiConfig)

    if (error) return <ErrorPage error={error}/>
    if (loading) return <LoadingPage/>
        
    if (data) console.log("resultsData: ", data);

    // const data = mockList;
    // return <LoadingPage/>

    if (!data?.title_results.length) {
        return (
            <div className={styles.background}>
                <p className={styles.errorMsg}>No matches were found.</p>
            </div>
        )
    }

    return (
        <div className={styles.background}>
            <ul style={{
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "1rem",
                    }}>
                {data?.title_results?.map((e, i) => {
                    return <ListItem item={e} key={i} id={e.id}/>
                })}
                {/* {data?.map((e, i) => {
                    return <ListItem item={e} key={i} id={e.id}/>
                })} */}
            </ul>
        </div>
    )
}