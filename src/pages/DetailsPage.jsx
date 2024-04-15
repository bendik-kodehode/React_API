import { useParams } from "react-router-dom"

export default function DetailsPage() {
    const id = useParams();

    useEffect(() => {
        const fetch = async () => {
            const url = import.meta.env.VITE_API_URL;
            const key = import.meta.env.VITE_API_KEY;
            // const encodedQuery = encodeURIComponent(query)
            try {
                const result = await axios({
                    method: "get",
                    url: `${url}/v1/search/`,
                    params: {
                        apiKey: key,
                        search_field: "name",
                        types: "tv,movie",
                        // search_value: encodedQuery
                        search_value: query
                    }
                });
                setData(result.data)
                console.log("Fetched");
            } catch (error) {
                console.error(error.message)
            }
        }
        fetch();
    }, [])

    return (<>
    <p>Details!</p>
    </>)
}