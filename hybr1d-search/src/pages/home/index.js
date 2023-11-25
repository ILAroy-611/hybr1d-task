import { useContext } from 'react'
import Header from '../../layout/header'
import { SearchContext } from '../../state/SearchContext'

export default function Home() {
    const { data } = useContext(SearchContext)
    console.debug('seachedData', data)
    return (
        <div className="home-page-wrapper">
            <Header />
            <div>
                {data?.hits?.map((ele) => {
                    return (
                        <li>
                            <ul>{ele.title || ele.story_title}</ul>
                        </li>
                    )
                })}
            </div>
        </div>
    )
}
