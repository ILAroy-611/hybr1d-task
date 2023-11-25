import { useEffect, useState } from 'react'
import { instance } from '../services/instance'

export default function useFetch(text) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState('')

    const getSearchResult = async () => {
        try {
            setLoading(true)
            const response = await instance.get(`/search?query=${text}`)
            setData({ ...response?.data })
        } catch (error) {
            console.debug(error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getSearchResult()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    return { data, loading, error, text }
}
