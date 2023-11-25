import { useState } from 'react'
import './style.css'
import useFetch from '../../hooks/useFetch'

export default function SearchBar() {
    const [search, setSearch] = useState('')
    useFetch(search)
    const handleChange = (e) => setSearch(e.target.value)

    return (
        <div>
            <input
                type="text"
                value={search}
                name="search"
                placeholder="Search Hacker News"
                onChange={handleChange}
            />
        </div>
    )
}
