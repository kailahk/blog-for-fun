import { useState } from "react"
import BlogList from "./BlogList"

export default function Home() {
    const [blogs, setBlogs] = useState([
        {title: 'first blog', content: 'lorem ipsum...', author: 'name', id: 1},
        {title: 'second blog', content: 'lorem ipsum...', author: 'name', id: 2},
        {title: 'third blog', content: 'lorem ipsum...', author: 'name', id: 3},
    ])
    const blogList = blogs.map((blog, idx) => <BlogList 
        key={blog.id} 
        blog={blog} 
        title={blog.title} 
        content={blog.content} 
        author={blog.author}
        /> )
    return(
        <div className="home">
            <h6>Your lucky number is: {Math.floor(Math.random() * (100 - 1 + 1) + 1)}</h6>
            <div className="blog-list">
                {blogList}
            </div>
        </div>
    )
}