import Blog from "./Blog"

export default function BlogList({ blogs, handleDelete}) {
    const blog = blogs.map((blog, idx) => <Blog
        id={blog.id}
        blog={blog}
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