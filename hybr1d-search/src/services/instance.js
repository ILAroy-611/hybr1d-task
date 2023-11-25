import axios from 'axios'

export const instance = axios.create({
    baseURL: `http://hn.algolia.com/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    },
})
