import { useContext } from 'react'
import Header from '../../layout/header'
import { SearchContext } from '../../state/SearchContext'
import NewsCard from '../../components/card'

export default function Home() {
    const { data } = useContext(SearchContext)
    console.debug('seachedData', data)
    return (
        <div className="home-page-wrapper">
            <Header />
            <div>
                {data?.hits?.map((ele) => {
                    return (
                        <ul>
                            <li style={{ listStyleType: 'none' }}>
                                <NewsCard {...ele} />
                            </li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}
