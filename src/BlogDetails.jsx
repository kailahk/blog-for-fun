import { useParams } from "react-router-dom"
import useFetch from "./useFetch";

export default function BlogDetails() {
    const { id } = useParams();
    const { data: blog, error, luckyNum } = useFetch(`http://localhost:8000/blogs/${id}`)

    return (
        <div className="blog-details">
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.content}</div>
                </article>
            )}
        </div>
    )
}