import { useEffect } from "react"
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import ListItem from "../components/ListItem/ListItem"

export default function ResultsPage() {
    const location = useLocation();
    const { query } = location.state || {}; 

    const apiConfig = {
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/search/`,
        params: {
            apiKey: import.meta.env.VITE_API_KEY,
            search_field: "name",
            types: "tv,movie",
            search_value: query
        }
    };

    const { data, loading, error } = useFetch(apiConfig)

    // useEffect(() => {
    //     const fetch = async () => {
    //         try {
    //             const result = await axios({
    //                 method: "get",
    //                 url: "https://mocki.io/v1/67ca190d-7ddc-4e24-b59e-6547f8777c77"
    //             })
    //             setData(result.data)
    //         } catch (error) {
    //             console.error(error.message)
    //         }
    //     }
    //     fetch();
    // }, [])

    // useEffect(() => {
    //     const log = () => {
    //         console.log(data);
    //     }
    //     log();
    // }, [data])

    if (data) console.log(data);

    return (
        <div style={{backgroundColor: "gray", minHeight: "100vh"}}>
            <ul>
                {data?.title_results.map((e, i) => {
                    return <ListItem item={e} key={i} id={e.id}/>
                })}
            </ul>
        </div>
    )
}