import { instance } from '../../services/instance'

export const getNewsPost = async (id) => {
    try {
        const response = await instance.get(`/items/${id}`)
        return response.data
    } catch (error) {
        console.debug(error)
        return new Error(error.message)
    }
}

export const getSearchResult = async (text, pageXOffset) => {
    try {
        const response = await instance.get(
            `/search?query=${text}&hitsPerPage=20&page=${pageXOffset}`
        )
        return response?.data
        // setTotalPage(response.data.nbPages)
    } catch (error) {
        console.debug(error)
        return new Error(error.message)
    }
}