import { formatDate } from '../../utils'
import Comment from '../comment'
import './style.css'

export default function Comments({ author, text, created_at, children }) {
    return (
        <div className="comments-wrapper">
            <div className="author-info-wrapper">
                <p className="author-info">{author}</p>
                <p className="comment-date">{created_at && formatDate(created_at)}</p>
            </div>
            <div className="comments-text-wrapper">
                <p className="comment-text">{text}</p>
                {children?.map((comment) => (
                    <Comment {...comment} />
                ))}
            </div>
        </div>
    )
}
