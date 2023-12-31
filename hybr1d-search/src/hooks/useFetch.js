import { useEffect, useState } from 'react'
import { getSearchResult } from '../utils/api'

/**
 *
 *
 * @export
 * @param {*} text
 * @param {*} pageOffset
 * @return {*}
 */
export default function useFetch(text, pageOffset) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [totalPage, setTotalPage] = useState(1)

    const handleFetchSearchResult = async () => {
        try {
            setLoading(true)
            const result = await getSearchResult(text, pageOffset)
            setData((prevData) => [...result.hits])
            setTotalPage(result.nbPages)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const timerID = setTimeout(() => {
            handleFetchSearchResult()
        }, 1000)
        return () => clearTimeout(timerID)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, pageOffset])

    return { data, loading, error, totalPage }
}
