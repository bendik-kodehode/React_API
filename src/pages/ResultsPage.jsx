import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import { useQuery } from "../contexts/QueryContext";
import useFetch from "../hooks/useFetch";
import ListItem from "../components/ListItem/ListItem"

export default function ResultsPage() {
    const { query } = useQuery();

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

    // console.log("ResultQuery: ", query);

    const { data, loading, error } = useFetch(apiConfig)

    if (data) console.log("resultsData: ", data);

    return (
        <div style={{backgroundColor: "gray", minHeight: "100vh"}}>
            <ul>
                {data?.title_results?.map((e, i) => {
                    return <ListItem item={e} key={i} id={e.id}/>
                })}
            </ul>
        </div>
    )
}