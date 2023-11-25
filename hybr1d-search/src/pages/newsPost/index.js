import { useContext } from 'react'
import { SearchContext } from '../../state/SearchContext'
import { Hourglass } from 'react-loader-spinner'
import { formatDate } from '../../utils'

export default function NewsPost() {
    const { newsData, newsError, newsLoading } = useContext(SearchContext)
    const { title, text, type, author, created_at } = { ...newsData }

    return (
        <>
            {newsLoading ? (
                <Hourglass
                    visible={true}
                    height="100vh"
                    width="100"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#306cce', '#72a1ed']}
                />
            ) : (
                <div className="newspost-detail-wrapper">
                    <div className="newspost-type-wrapper">
                        <div className="newspost-type">{type}</div>
                    </div>
                    <div className="newspost-header-wrapper">
                        <h4 className="newspost-header">{title}</h4>
                        <p className="newspost-text">{text ?? ''}</p>
                        <div className="newspost-additional-info-wrapper">
                            <div>{author}</div>
                            <div>{created_at && formatDate(created_at)}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
