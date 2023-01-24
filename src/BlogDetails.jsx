import { useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFetch";

export default function BlogDetails() {
    const { id } = useParams();
    const { data: blog, error } = useFetch(`http://localhost:8000/blogs/${id}`)
    const navigate = useNavigate();

    function handleClick() {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div className="blog-details">
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.content}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    )
}