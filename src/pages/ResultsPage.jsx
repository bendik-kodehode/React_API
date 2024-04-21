import { useQuery } from "../contexts/QueryContext";
import useFetch from "../hooks/useFetch";
import ListItem from "../components/ListItem/ListItem"

// TESTING
import mockList from "../testing/mock-list.json"
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

    // console.log("ResultQuery: ", query);

    const { data, loading, error } = useFetch(apiConfig)

    if (data) console.log("resultsData: ", data);

    // const data = mockList;

    return (
        <div style={{backgroundColor: "gray", minHeight: "100vh", paddingTop: "60px"}}>
            <ul>
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