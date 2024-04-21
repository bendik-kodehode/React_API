import { useState, useEffect } from "react";
import axios from "axios";
    
function useFetch(apiConfig) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);

        const fetch = async () => {
            try {
                const result = await axios(apiConfig);
                setData(result.data)
            } catch (err) {
                console.error(err.message)
                setError(err.message)
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, [apiConfig.url, JSON.stringify(apiConfig.params)])

    return { data, loading, error }    ;
}

export default useFetch;