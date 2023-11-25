import { useEffect, useState } from 'react'
import { instance } from '../services/instance'

export default function useNewsFetch(id) {
    const [newsLoading, setLoading] = useState(false)
    const [newsData, setNewsData] = useState({})
    const [newsError, setError] = useState('')

    const getNewsPost = async () => {
        try {
            setLoading(true)
            const response = await instance.get(`/items/${id}`)
            console.debug(response)
            setNewsData({ ...response?.data })
        } catch (error) {
            console.debug(error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getNewsPost()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return { newsData, newsLoading, newsError }
}
