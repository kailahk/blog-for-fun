import Blog from "./Blog"

export default function BlogList({ blogs, handleDelete }) {
    const blog = blogs.map((blog, idx) => <Blog
        blog={blog}
        id={blog.id}
        title={blog.title}
        content={blog.content}
        author={blog.author}
        key={blog.id}
        handleDelete={handleDelete}
    />)
    return (
        <>
            {blog}
        </>
    )
}