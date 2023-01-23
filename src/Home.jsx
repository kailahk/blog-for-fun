import { useState, useEffect } from "react"
import BlogList from "./BlogList"

export default function Home() {
    const [blogs, setBlogs] = useState([
        {title: 'first blog', content: 'lorem ipsum...', author: 'name', id: 1},
        {title: 'second blog', content: 'lorem ipsum...', author: 'name', id: 2},
        {title: 'third blog', content: 'lorem ipsum...', author: 'name', id: 3},
    ])

    const [luckyNum, setLuckyNum] = useState(0)

    function handleDelete(id) {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setLuckyNum(Math.floor(Math.random() * (100 - 1 + 1) + 1))
    }, []);
    
    return(
        <div className="home">
            <h6 className="lucky-num">Your lucky number is: {luckyNum}</h6>
            <div className="blog-list">
                <BlogList blogs={blogs} setBlogs={setBlogs} handleDelete={handleDelete}/>
            </div>
        </div>
    )
}