import { instance } from '../../services/instance'

export const getSearchResult = async (text) => {
    try {
        const response = await instance.get(`/search?query=${text}`)
        return response
    } catch (error) {
        return error.message
    }
}
