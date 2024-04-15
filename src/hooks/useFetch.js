import { useState, useEffect } from "react";
import axios from "axios";
    
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);

        const fetch = async () => {
            try {
                const result = await axios.get(url);
                setData(result.data)
            } catch (error) {
                console.error(error.message)
            } finally {
                setLoading(false);
                console.log("Fetched from:", url);
            }
        };
        fetch();
    }, [url])

    return {data, loading, error}    
}