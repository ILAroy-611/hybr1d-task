import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useNewsFetch from '../../hooks/useNewsFetch'
import { SearchContext } from '../../state/SearchContext'
import { Hourglass } from 'react-loader-spinner'
import { formatDate } from '../../utils/common/index'
import Comment from '../../components/comment'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import './style.css'

export default function NewsPost() {
    const { objectID } = useContext(SearchContext)
    const { data, loading } = useNewsFetch(objectID)
    const { title, text, type, author, created_at, children } = { ...data }
    const navigate = useNavigate()

    return (
        <>
            {loading ? (
                <Hourglass
                    visible={true}
                    height="100vh"
                    width="100"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#f5f178', '#bfb4fe']}
                />
            ) : (
                <div className="newspost-detail-wrapper">
                    <div>
                        <div className="newspost-type-wrapper">
                            <div className="newspost-type">{type}</div>
                            <div onClick={() => navigate('/')}>
                                <HomeIcon className="home-icon" />
                            </div>
                        </div>
                        <div className="newspost-header-wrapper">
                            <h4 className="newspost-header">{title}</h4>
                            <div className="newspost-additional-info-wrapper">
                                <div className="newspost-author">{author}</div>
                                <div className="newspost-date">
                                    {created_at && formatDate(created_at)}
                                </div>
                            </div>
                            <p className="newspost-text">{text ?? ''}</p>
                        </div>
                    </div>
                    <div className="newspost-comment-wrapper">
                        {children?.map((comment, ind) => (
                            <Comment {...comment} key={ind} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
