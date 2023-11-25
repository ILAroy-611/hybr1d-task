import { createContext, useState } from 'react'
import useFetch from '../hooks/useFetch'
import useNewsFetch from '../hooks/useNewsFetch'

export const SearchContext = createContext()

export default function SearchContextProvider({ children }) {
    const [search, setSearch] = useState('')
    const { data, error, loading } = useFetch(search)
    const [objectID, setObjectID] = useState('')
    const { newsData, newsError, newsLoading } = useNewsFetch(objectID)

    return (
        <SearchContext.Provider
            value={{
                data,
                error,
                loading,
                search,
                setSearch,
                setObjectID,
                newsData,
                newsError,
                newsLoading,
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}
