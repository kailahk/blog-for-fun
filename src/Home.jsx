import { useState, useEffect } from "react"
import BlogList from "./BlogList"

export default function Home() {
    const [blogs, setBlogs] = useState(null)

    const [luckyNum, setLuckyNum] = useState(0)

    function handleDelete(id) {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setLuckyNum(Math.floor(Math.random() * (100 - 1 + 1) + 1));
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data)
            })
    }, []);
    
    return(
        <div className="home">
            <h6 className="lucky-num">Your lucky number is: {luckyNum}</h6>
            <div className="blog-list">
                {blogs && <BlogList blogs={blogs} setBlogs={setBlogs} handleDelete={handleDelete}/>}
            </div>
        </div>
    )
}