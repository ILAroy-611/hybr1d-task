import { useContext } from 'react'
import Header from '../../layout/header'
import { SearchContext } from '../../state/SearchContext'
import NewsCard from '../../components/card'
import { NavLink } from 'react-router-dom'
import './style.css'

export default function Home() {
    const { data, setObjectID } = useContext(SearchContext)
    console.debug(data)
    return (
        <div className="home-page-wrapper">
            <Header />
            <div>
                {data?.hits?.map((ele) => {
                    return (
                        <ul>
                            <nav id="newscard" onClick={() => setObjectID(ele?.objectID)}>
                                <NavLink to="/news" className={'link'}>
                                    <NewsCard {...ele} />
                                </NavLink>
                            </nav>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}
