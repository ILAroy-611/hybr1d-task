export default function NewsCard({
    title,
    story_title,
    url,
    points,
    author,
    num_comments,
}) {
    return (
        <div className="newcard-wrapper">
            <h3>
                {title || story_title} ({url})
            </h3>
            <div>
                {points} | {author} | {num_comments ?? 0} comments
            </div>
        </div>
    )
}
