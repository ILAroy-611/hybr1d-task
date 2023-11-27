import { instance } from '../../services/instance'

export const getNewsPost = async (id) => {
    try {
        const response = await instance.get(`/items/${id}`)
        return response?.data
    } catch (error) {
        console.debug(error)
        return new Error(error.message)
    }
}

export const getSearchResult = async (text = '', pageOffset) => {
    // let queryParam =
    //     text !== ''
    //         ? `query=${text}&hitsPerPage=20&page=${pageOffset}`
    //         : `hitsPerPage=20&page=${pageOffset}`
    console.debug(pageOffset)
    let queryParam =
        text !== ''
            ? `query=${text}&hitsPerPage=${10 * (pageOffset + 1)}`
            : `hitsPerPage=${10 * (pageOffset + 1)}`
    try {
        const response = await instance.get(`/search?${queryParam}`)
        return response?.data
    } catch (error) {
        console.debug(error)
        return new Error(error.message)
    }
}
