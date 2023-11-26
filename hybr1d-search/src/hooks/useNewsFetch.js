import { useEffect, useState } from 'react'
import { getNewsPost } from '../utils/api'

export default function useNewsFetch(id) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState('')

    const handleFetchNewsPost = async () => {
        try {
            setLoading(true)
            const result = await getNewsPost(id)
            setData({ ...result })
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        handleFetchNewsPost()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return { data, loading, error }
}
