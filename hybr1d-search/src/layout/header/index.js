import SearchBar from '../../components/searchBar'
import './style.css'

/**
 *
 *
 * @export
 * @return {*}
 */
export default function Header() {
    return (
        <div className="header-wrapper">
            <div className="logo">Hacker Search</div>
            <div className="search-bar-wrapper">
                <SearchBar />
            </div>
        </div>
    )
}
