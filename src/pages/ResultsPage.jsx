import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";

import ListItem from "../components/ListItem/ListItem"

export default function ResultsPage() {
    const [data, setData] = useState();

    // useEffect(() => {
    //     const fetch = async () => {
    //         const url = import.meta.env.VITE_API_URL;
    //         const key = import.meta.env.VITE_API_KEY;
    //         try {
    //             const result = await axios(`${url}/v1/search/?apiKey=${key}&search_field=name&search_value=${encodeURIComponent(input)}`);
    //             setData(result)
    //             console.log(result);
    //         } catch (error) {
    //             console.error(error.message)
    //         }
    //     }
    // })

    const location = useLocation();
    const searchTerm = location.state.query;
    console.log(searchTerm);

    return (
        <div>
            <ul>
                {/* {result.map(resultItem => {
                    return <ListItem resultItem={resultItem}/>
                })} */}
                <h3>Hello!</h3>
                <p>You searched for: {searchTerm}</p>
            </ul>
        </div>
    )
}