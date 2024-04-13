import { useState, useEffect } from "react"

import ListItem from "../components/ListItem/ListItem"

export default function ResultsPage(input) {
    const [data, setData] = useState();

    useEffect(() => {
        const fetch = async () => {
            const url = import.meta.env.VITE_API_URL;
            const key = import.meta.env.VITE_API_KEY;
            try {
                const result = await axios(`${url}/v1/search/?apiKey=${key}&search_field=name&search_value=${encodeURIComponent(input)}`);
                setData(result)
                console.log(result);
            } catch (error) {
                console.error(error.message)
            }
        }
    })

    return (
        <div>
            <ul>
                {result.map(resultItem => {
                    return <ListItem resultItem={resultItem}/>
                })}
            </ul>
        </div>
    )
}