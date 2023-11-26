import { NavLink } from 'react-router-dom'
import NewsCard from '../../components/card'
import { useContext } from 'react'
import { SearchContext } from '../../state/SearchContext'

export default function CardList({ list }) {
    const { setObjectID } = useContext(SearchContext)

    return (
        <>
            {list?.map((item) => {
                return (
                    <ul key={item?.objectID}>
                        <nav id="newscard" onClick={() => setObjectID(item?.objectID)}>
                            <NavLink to="/news" className={'link'}>
                                <NewsCard {...item} />
                            </NavLink>
                        </nav>
                    </ul>
                )
            })}
        </>
    )
}
