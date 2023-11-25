import { createContext } from 'react'
import useFetch from '../hooks/useFetch'

export const SearchContext = createContext()

export default function SearchContextProvider({ children }) {
    const { data, error, loading } = useFetch('')

    return (
        <SearchContext.Provider value={{ data, error, loading }}>
            {children}
        </SearchContext.Provider>
    )
}
