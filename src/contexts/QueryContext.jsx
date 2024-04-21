import { createContext, useContext, useState } from "react";

const QueryContext = createContext();
export const useQuery = () => useContext(QueryContext);

export const QueryProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const [type, setType] = useState("tv,movie")
    return (
        <QueryContext.Provider value={{ query, setQuery, type, setType }}>
            {children}
        </QueryContext.Provider>
    )
}