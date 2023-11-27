import { useContext } from 'react'
import { SearchContext } from '../../state/SearchContext'
import { NavLink } from 'react-router-dom'
import NewsCard from '../../components/card'
import './style.css'

/**
 *
 *
 * @export
 * @param {*} { list }
 * @return {*}
 */
export default function CardList({ list }) {
    const { setObjectID } = useContext(SearchContext)

    return (
        <>
            {list?.length !== 0 ? (
                list?.map((item) => {
                    return (
                        <ul key={item?.objectID}>
                            <nav
                                id="newscard"
                                onClick={() => setObjectID(item?.objectID)}
                            >
                                <NavLink to="/news" className={'link'}>
                                    <NewsCard {...item} />
                                </NavLink>
                            </nav>
                        </ul>
                    )
                })
            ) : (
                <h4 className="no-result">No results found</h4>
            )}
        </>
    )
}
