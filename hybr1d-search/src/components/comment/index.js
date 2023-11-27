import { formatDate } from '../../utils/common'
import Comments from '../comments'
import './style.css'

/**
 *
 * @export
 * @param {*} { author, text, created_at, children }
 * @return {*}
 */
export default function Comment({ author, text, created_at, children }) {
    return (
        <div className="comment-wrapper">
            <div className="author-info-wrapper">
                <p className="author-info">{author}</p>
                <p className="comment-date ">{created_at && formatDate(created_at)}</p>
            </div>
            <div className="comment-text-wrapper">
                <p className="comment-text">{text}</p>
                {children?.map((comment, ind) => (
                    <Comments {...comment} key={ind} />
                ))}
            </div>
        </div>
    )
}
