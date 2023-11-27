import { createContext, useState } from 'react'
import useFetch from '../hooks/useFetch'

export const SearchContext = createContext()
/**
 *
 *
 * @export
 * @param {*} { children }
 * @return {*}
 */
export default function SearchContextProvider({ children }) {
    const [search, setSearch] = useState('')
    const [pageOffset, setPageOffset] = useState(0)
    const { data, error, loading, totalPage } = useFetch(search, pageOffset)
    const [objectID, setObjectID] = useState('')

    const handleInfiniteScroll = async () => {
        const element = document.documentElement
        setTimeout(() => {
            if (
                element.scrollTop + window.innerHeight + 1 > element.scrollHeight ||
                element.scrollTop + window.innerHeight + 1 === element.scrollHeight
            ) {
                if (pageOffset < totalPage) {
                    setPageOffset((prev) => prev + 1)
                }
                element.scrollTo({ top: window.innerHeight - element.scrollTop })
            }
        }, 1000)
    }
    return (
        <SearchContext.Provider
            value={{
                data,
                error,
                loading,
                search,
                setSearch,
                setObjectID,
                objectID,
                handleInfiniteScroll,
                setPageOffset,
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}
