import { createContext, useState } from 'react'
import useFetch from '../hooks/useFetch'

export const SearchContext = createContext()

export default function SearchContextProvider({ children }) {
    const [search, setSearch] = useState('')
    const { data, error, loading } = useFetch(search)

    return (
        <SearchContext.Provider value={{ data, error, loading, search, setSearch }}>
            {children}
        </SearchContext.Provider>
    )
}
