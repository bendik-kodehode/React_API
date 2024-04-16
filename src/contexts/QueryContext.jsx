import { createContext, useContext, useState } from "react";

const QueryContext = createContext();
export const useQuery = () => useContext(QueryContext);

export const QueryProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    return (
        <QueryContext.Provider value={{ query, setQuery}}>
            {children}
        </QueryContext.Provider>
    )
}