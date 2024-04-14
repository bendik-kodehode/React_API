import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import axios from "axios";

import ListItem from "../components/ListItem/ListItem"

export default function ResultsPage() {
    const [data, setData] = useState();

    const location = useLocation();
    const { query } = location.state || {}; 

    useEffect(() => {
        const fetch = async () => {
            const url = import.meta.env.VITE_API_URL;
            const key = import.meta.env.VITE_API_KEY;
            const encodedQuery = encodeURIComponent(query)
            try {
                const result = await axios(`${url}/v1/search/?apiKey=${key}&search_field=name&types=tv,movie&search_value=${encodedQuery}`);
                setData(result.data)
                console.log("Fetched");
            } catch (error) {
                console.error(error.message)
            }
        }
        // fetch();
    }, [])

    useEffect(() => {
        const log = () => {
            console.log(data);
        }
        log();
    }, [data])

    return (
        <div>
            <ul>
                {data?.title_results.map((e, i) => {
                    return <ListItem item={e} key={i}/>
                })}
            </ul>
        </div>
    )
}