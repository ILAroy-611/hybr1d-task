import { useContext, useState } from 'react'
import './style.css'
import { SearchContext } from '../../state/SearchContext'

export default function SearchBar() {
    const { search, setSearch } = useContext(SearchContext)
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
