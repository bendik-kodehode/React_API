import { useState, useEffect } from "react";
import axios from "axios";
    
function useFetch(apiConfig) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setData(null);
        setError(null);
        const cacheKey = `data-${apiConfig.url}-${JSON.stringify(apiConfig.params)}`
        const retrievedData = sessionStorage.getItem(cacheKey)
        
        if (retrievedData) {
            setData(JSON.parse(retrievedData))
        } else {
            const fetch = async () => {
                setLoading(true);
                try {
                    const result = await axios(apiConfig);
                    setData(result.data)
                    sessionStorage.setItem(cacheKey, JSON.stringify(result.data))
                } catch (err) {
                    console.error(err.message)
                    setError(err.message)
                } finally {
                    setLoading(false);
                }
            };
            fetch();
        }
    }, [apiConfig.url, JSON.stringify(apiConfig.params)])


    return { data, loading, error }    ;
}

export default useFetch;