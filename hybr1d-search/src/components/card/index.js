import './style.css'

/**
 * @export
 * @param {string} {
 *     title,
 *     story_title,
 *     url,
 *     points,
 *     author,
 *     num_comments,
 * }
 * @return {*}
 */
export default function NewsCard({
    title,
    story_title,
    url,
    points,
    author,
    num_comments,
}) {
    return (
        <div className="newscard-wrapper">
            <div className="newscard-title-container">
                <h3 className="newscard-title">
                    {title ?? story_title ?? 'Title On the Way...'}
                </h3>
                <a
                    href={`${url}`}
                    target="_blank"
                    className="newscard-url"
                    onClick={(e) => e.stopPropagation()}
                    rel="noreferrer"
                >
                    {url}
                </a>
            </div>
            <div className="newscard-footer-container">
                <div className="footer footer-content">Points: {points} </div>
                <div className="footer footer-content">Author: {author}</div>
                <div className="footer-content">Comments: {num_comments ?? 0} </div>
            </div>
        </div>
    )
}
