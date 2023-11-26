import { useContext } from 'react'
import { SearchContext } from '../../state/SearchContext'
import { ReactComponent as CancelIcon } from '../../assets/icons/cancel.svg'
import './style.css'

export default function SearchBar() {
    const { search, setSearch } = useContext(SearchContext)
    const handleChange = (e) => setSearch(e.target.value)

    return (
        <div className="searchbar-wrapper">
            <input
                type="text"
                value={search}
                name="search"
                placeholder="Search Hacker News"
                onChange={handleChange}
                className="searchbar"
            />
            <div onClick={() => setSearch('')}>
                <CancelIcon className="cancel-icon" />
            </div>
        </div>
    )
}
