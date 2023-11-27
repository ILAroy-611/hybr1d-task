import { useContext } from 'react'
import { SearchContext } from '../../state/SearchContext'
import { ReactComponent as CancelIcon } from '../../assets/icons/cancel.svg'
import './style.css'

/**
 *
 *
 * @export
 * @return {*}
 */
export default function SearchBar() {
    const { search, setSearch, setPageOffset } = useContext(SearchContext)
    const handleChange = (e) => {
        setSearch(e.target.value)
        setPageOffset(0)
    }
    const handleResetSearch = () => {
        setSearch('')
        setPageOffset(0)
    }

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
            <div onClick={handleResetSearch}>
                <CancelIcon
                    className={`${search.length ? 'show-icon cancel-icon' : 'hide-icon'}`}
                />
            </div>
        </div>
    )
}
