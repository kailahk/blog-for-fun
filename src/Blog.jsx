import { Link } from "react-router-dom"

export default function Blog({title, author, id, content, handleDelete}) {

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
            <div className="blog-content">
                {content}
            </div>
            </Link>
            <div className="button">
                <button className="edit-btn">Edit</button>
                &nbsp;&nbsp;
                <button onClick={() => handleDelete(id)} className="delete-btn">Delete</button>
            </div>
        </div>
    )
}