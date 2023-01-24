import { Link } from "react-router-dom"

export default function Blog({title, author, id, content}) {
    let contentPreview = [...content.split(' ').slice(0, 5).join(' '), '...']

    return(
        <div className="blog">
            <Link to={`/blogs/${id}`}>
            <div className="blog-title-and-author">
                <div className="blog-title">
                {title}
                </div>
                <div className="blog-author">
                Written by {author}
            </div>
            </div>
            <div className="blog-preview">
                {contentPreview}
            </div>
            </Link>
        </div>
    )
}