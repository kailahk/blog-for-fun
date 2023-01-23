export default function BlogList({ blog, title, content, author }) {
    return (
        <div className="blog">
            <div className="blog-title">
                {title}
            </div>
            <div className="blog-content">
                {content}
            </div>
            <div className="blog-author">
                {author}
            </div>
        </div>
    )
}