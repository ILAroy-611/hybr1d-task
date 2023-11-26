import { useContext, useEffect } from 'react'
import Header from '../../layout/header'
import { SearchContext } from '../../state/SearchContext'
import { ThreeCircles } from 'react-loader-spinner'
import CardList from '../../layout/cardList/cardList'
import './style.css'

export default function Home() {
    const { data, loading, handleInfiniteScroll } = useContext(SearchContext)

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll)
        return () => window.removeEventListener('scroll', handleInfiniteScroll)
    }, [])

    return (
        <div className="home-page-wrapper">
            <Header />
            {loading ? (
                <ThreeCircles
                    height="90vh"
                    width="100"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass="circle-loading"
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />
            ) : (
                <div>
                    <CardList list={data?.hits} />
                </div>
            )}
        </div>
    )
}
